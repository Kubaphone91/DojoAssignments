# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect,HttpResponse

# Create your views here.
def index(request):
    try:
        request.session['counter']
    except:
        request.session['counter'] = 0
    return render(request, "sform/index.html")

def process(request):
    if request.method == 'POST':
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        return redirect('/success')
    else:
        return redirect('/')

def success(request):
    request.session['counter'] += 1
    return render(request, "sform/success.html")

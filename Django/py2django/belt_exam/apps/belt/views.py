# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import User, Travel
# Create your views here.

def index(request):
    if 'logged_in' not in request.session:
        request.session['logged_in'] = False
        return redirect('exam:index')
    if request.session['logged_in'] == True:
        return redirect('exam:travels')
    return render(request, 'belt/index.html')

def register(request):
    if request.method == 'GET':
        return redirect('exam:index')
    else:
        if User.objects.checkReg(request.POST, request):
            validReg = True
            return redirect('exam:travels')
        else:
            validReg = False
            return redirect('exam:index')

def login(request):
    if request.method == 'GET':
        return redirect('exam:index')
    else:
        if User.objects.checkLog(request.POST, request):
            validLog = True
            request.session['logged_in'] = True
            return redirect('exam:travels')
        else:
            validLog = False
            return redirect('exam:index')

def travels(request):
    context = {
        'travels': Travel.objects.all(),
        'users': User.objects.all(),
        'trips': Travel.objects.all()
    }
    return render(request, 'belt/travels.html', context)

def createTravel(request):
    Travel.objects.checkTravel(request.POST, request)
    return redirect('exam:newTravel')

def newTravel(request):
    context = {
        'travels': Travel.objects.all()
    }
    return render(request, 'belt/addtrip.html', context)

def tripinfo(request, id):
    context ={
        'travels': Travel.objects.all(),
        'users': User.objects.filter(id=id)
    }
    return render(request, 'belt/tripinfo.html', context)


def logout(request):
    request.session.clear()
    return redirect('exam:index')

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User
# Create your views here.

def index(request):
    return render(request, 'validation/index.html')

def check(request):
    username = request.POST['username']
    if len(username) > 28:
        messages.error(request, "Username is too long, must be 28 characters or less")
        return redirect('/')
    elif len(username) < 8:
        messages.error(request, "Username is too short, must be at least 8 characters long")
        return redirect('/')
    else:
        User.objects.create(name=username)
        messages.add_message(request, messages.INFO, 'The user name you entered is valid. Thank you!')
        return redirect('/success')

def success(request):
    context = {
        'users': User.objects.all()
    }
    return render(request, 'validation/success.html', context)


def confirm(request, id):
    context = {
        'users': User.objects.filter(id=id)
    }
    return render(request, 'validation/confirm.html', context)

def destroy(request, id):
    print "I got to here"
    User.objects.filter(id=id).delete()
    messages.add_message(request, messages.INFO, 'User has been deleted')
    return redirect('/')

def go_back(request):
    return redirect('/')

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
    return render(request, 'login_app/index.html')

def register(request):
    if request.method == "GET":
        return redirect('login_app:index')
    else:
        if User.objects.checkReg(request.POST, request):
            validReg = True
            return redirect('login_app:success')
        else:
            validReg = False
            return redirect('login_app:index')

def success(request):
    return render(request, 'login_app/success.html')

def login(request):
    if request.method == "GET":
        return redirect('login_app:index')
    else:
        if User.objects.checkLog(request.POST, request):
            validLog = True
            return redirect('login_app:success')
        else:
            validLog = False
            return redirect('login_app:index')

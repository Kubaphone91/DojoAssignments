# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'r_port/index.html')

def test(request):
    return render(request, 'r_port/testimonials.html')

def about(request):
    return render(request, 'r_port/about.html')

def project(request):
    return render(request, 'r_port/projects.html')

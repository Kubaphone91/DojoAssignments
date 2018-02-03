# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, "land/index.html")

def landscape(request, id):
    num = int(id)

    if num > 50:
        messages.error(request, "Please enter a number in the specified range")
        return redirect('/')
    else:
        context = {
            'snow': '/land/img/snow.jpg',
            'desert': 'land/img/desert.jpg',
            'forest': '/land/img/forest.jpg',
            'vineyard': '/land/img/vineyard.jpg',
            'tropical': '/land/img/tropical.jpg'
        }

        if num <= 10:
            context['id'] = 'snow'
        elif num <= 20:
            context['id'] = 'desert'
        elif num <= 30:
            context['id'] = 'forest'
        elif num <= 40:
            context['id'] = 'vineyard'
        elif num <= 50:
            context['id'] = 'tropical'
        return render(request, 'land/results.html', context)

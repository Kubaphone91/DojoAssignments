# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
import random

VALUES = ['Barney', 'Robin', 'Ted', 'Lily', 'Marshall', 'Alan', 'Meg', 'Peter', 'Lois', 'Brian']

# Create your views here.
def index(request):
    return render(request, "SurpriseMe/index.html")

def results(request):
    if request.method == 'POST':
        num = int(request.POST['number'])
        random.shuffle(VALUES)
        context = {
            'words': []
        }
        print num
        print len(VALUES)
        if num > len(VALUES):
            messages.error(request, "Please choose a number in the specified range")
            return redirect('/')
        else:
            for number in range(0, num):
                context['words'].append(VALUES[number])
        return render(request, 'SurpriseMe/results.html', context)

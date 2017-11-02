# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'Dninja/index.html')

def ninjas(request, color):
    context = {
        'tmnt': '/Dninja/img/tmnt.png',
        'leonardo': '/Dninja/img/leonardo.jpg',
        'donatello': '/Dninja/img/donatello.jpg',
        'raphael': '/Dninja/img/raphael.jpg',
        'michelangelo': '/Dninja/img/michelangelo.jpg',
        'april': '/Dninja/img/notapril.jpg'
    }

    if color == '':
        context['all'] = True
    elif color == 'blue':
       context['color'] = 'blue'
    elif color == 'purple':
        context['color'] = 'purple'
    elif color == 'red':
       context['color'] = 'red'
    elif color == 'orange':
        context['color'] = 'orange'

    return render(request, 'Dninja/tmnt.html', context)

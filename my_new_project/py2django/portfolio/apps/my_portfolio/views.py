# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'my_portfolio/index.html')

def test(request):
    print (request.method)
    return render(request, 'my_portfolio/testimonials.html')

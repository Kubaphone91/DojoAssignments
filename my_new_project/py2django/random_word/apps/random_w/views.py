# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random, string

# Create your views here.
def index(request):
    if request.method == 'POST':
        generate_word = ''.join(random.choice(string.ascii_uppercase + string.digits) for k in range(14))
        if 'attempts' in request.session:
            request.session['attempts'] += 1
        else:
            request.session['attempts'] = 1
        random_word = {
            'word': generate_word
        }
        return render(request, 'random_w/index.html', random_word)
    else:
        return render(request, 'random_w/index.html')

def reset(request):
    request.session['attempts'] = 0
    return redirect('/')

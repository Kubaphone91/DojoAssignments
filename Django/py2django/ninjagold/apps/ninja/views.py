# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
import random
import datetime

# Create your views here.
def index(request):
    if 'gold' in request.session:
        return render(request, "ninja/index.html")
    else:
        request.session['gold'] = 0
        request.session['log'] = ''
        status = {
            'gold': request.session['gold'],
            'log': request.session['log']
        }
        return render(request, "ninja/index.html", status)

def process_farm(request):
    if request.method == 'POST':
        gold = int(random.randrange(10,21))
        request.session['gold'] += gold
        request.session['log'] += 'Earned ' + str(gold) + ' gold(s) from the farm! ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + '.<br>'
        return redirect('/')

def process_cave(request):
    if request.method == 'POST':
        gold = int(random.randrange(5,11))
        request.session['gold'] += gold
        request.session['log'] += 'Earned ' + str(gold) + ' gold(s) from the cave! ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + '.<br>'
        return redirect('/')

def process_house(request):
    if request.method == 'POST':
        gold = int(random.randrange(2,6))
        request.session['gold'] += gold
        request.session['log'] += 'Earned ' + str(gold) + ' gold(s) from the house! ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + '.<br>'
        return redirect('/')

def process_casino(request):
    if request.method == 'POST':
        gold = int(random.randrange(-50,51))
        request.session['gold'] += gold
        if gold >= 0:
            request.session['log'] += 'Earned ' + str(gold) + ' gold(s) from the casino! ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + '.<br>'
        else:
            gold = abs(gold)
            request.session['log'] += 'Lost ' + str(gold) + ' gold(s) from the casino... Better luck next time. ' + ('{:%m-%d-%Y}'.format(datetime.datetime.now())) + '.<br>'
        return redirect('/')

def reset(request):
    if ('gold' and 'log') in request.session:
        request.session.clear()
        return redirect('/')

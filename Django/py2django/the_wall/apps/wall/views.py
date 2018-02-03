# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import User, Message, Comment
# Create your views here.

def index(request):
    return render(request, "wall/index.html")

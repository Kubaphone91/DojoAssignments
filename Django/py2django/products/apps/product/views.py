# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Product

# Create your views here.
def index(request):
    Product.objects.create(name="Apple", description="Fruit", weight="0.25lb", price="$0.69", cost="$0.20", category="Fruit")
    Product.objects.create(name="Pear", description="Fruit", weight="0.35lb", price="$0.59", cost="$0.18", category="Fruit")
    Product.objects.create(name="Orange", description="Fruit", weight="0.40lb", price="$0.89", cost="$0.40", category="Fruit")
    products = Product.objects.all()
    print products
    return render(request, 'product/index.html')

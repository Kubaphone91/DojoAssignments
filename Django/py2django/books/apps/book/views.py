# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Book

# Create your views here.
def index(request):
    book1 = Book.objects.create(title="Harry Potter and the Sorcerer's Stone", author="J.K. Rowling", published_date="1997", category="Fantasy", in_print="True")
    book2 = Book.objects.create(title="Harry Potter and the Chamber of Secrets", author="J.K. Rowling", published_date="1998", category="Fantasy", in_print="True")
    book3 = Book.objects.create(title="Harry Potter and the Prisoner of Azkaban", author="J.K. Rowling", published_date="1999", category="Fantasy", in_print="True")
    book4 = Book.objects.create(title="Harry Potter and the Goblet of Fire", author="J.K. Rowling", published_date="2000", category="Fantasy", in_print="True")
    book5 = Book.objects.create(title="Harry Potter and the Order of the Phoenix", author="J.K. Rowling", published_date="2003", category="Fantasy", in_print="True")
    books = Book.objects.all()
    for book in books:
        print book.title, book.author, book.published_date, book.category, book.in_print
    return render(request, 'book/index.html')

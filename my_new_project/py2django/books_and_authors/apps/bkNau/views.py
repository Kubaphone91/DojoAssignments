# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Book, Author
# Create your views here.

def index(request):
    author1 = Author.objects.create(name="J.K. Rowling")
    author2 = Author.objects.create(name="Ernest Hemingway")
    author3 = Author.objects.create(name="Stephen King")
    author4 = Author.objects.create(name="J.R.R. Tolkien")
    author5 = Author.objects.create(name="Mark Twain")

    book1 = Book.objects.create(title="Harry Potter and the Sorcerer's Stone", published_date="1997", category="Fantasy", in_print="True", author_id=author1)
    book2 = Book.objects.create(title="Harry Potter and the Chamber of Secrets", published_date="1998", category="Fantasy", in_print="True", author_id=author1)
    book3 = Book.objects.create(title="The Fellowship of the Ring", published_date="1954", category="Fantasy", in_print="True", author_id=author4)
    book4 = Book.objects.create(title="The Two Towers", published_date="1954", category="Fantasy", in_print="True", author_id=author4)
    book5 = Book.objects.create(title="The Return of the King", published_date="1955", category="Fantasy", in_print="True", author_id=author4)
    book_list = Book.objects.all()
    for book in book_list:
        print book.title, book.author_id, book.published_date, book.category, book.in_print
    return render(request, "bkNau/index.html")

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import messages
import re, bcrypt

email_check = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# Create your models here.
class UserManager(models.Manager):
    def checkReg(self, postData, request):
        name = postData['name']
        alias = postData['alias']
        email = postData['email']
        password = postData['password']
        confirm_pass = postData['confirm_pass']
        validReg = True
        if len(name) < 2 or len(alias) < 2:
            messages.error(request, 'Name and Alias must contain at least 2 characters')
            validReg = False
        if not email_check.match(email):
            messages.error(request, 'Valid email must be used')
            validReg = False
        if len(password) < 8:
            messages.error(request, 'Password must contain at least 8 characters')
            validReg = False
        if password != confirm_pass:
            messages.error(request, 'Passwords do not match')
            validReg = False
        if User.objects.filter(email=email):
            messages.error(request, 'Email has already been registered')
            validReg = False

        if validReg == True:
            messages.success(request, email + " was successfully registered!")
            pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            User.objects.create(name=name, alias=alias, email=email, password=pw_hash)
        return validReg

    def checkLog(self, postData, request):
        email = postData['email_log']
        password = postData['password_log']
        validLog = True
        pull_user = User.objects.filter(email=email)

        if len(email) < 1 or len(password) < 1:
            messages.error(request, 'Username and password must be filled in')
            validLog = False
        elif not pull_user:
            messages.error(request, "Username or password is incorrect")
            validLog = False
        else:
            db_password = User.objects.get(email=email).password.encode()
            password_hash = password.encode()
            pull_user = User.objects.get(email=email)
            if bcrypt.hashpw(password_hash, db_password) == db_password:
                request.session['user'] = {
                    'id': pull_user.id,
                    'name': pull_user.name,
                    'alias': pull_user.alias,
                    'email': pull_user.email
                }
                validLog = True
            else:
                messages.error(request, "Username or password is incorrect")
                validLog = False
        return validLog

class User(models.Model):
    name = models.CharField(max_length=100)
    alias = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

class Author(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)


class BookManager(models.Manager):
    def checkBook(self, postData, request):
        user = User.objects.get(id=request.session['user']['id'])
        title = postData['title']
        review = postData['review']
        rating = postData['rating']
        author_name = postData['author_name']
        author_list = postData['author_list']
        author_check = Author.objects.filter(name=author_name)
        validBook = True
        validAuthor = True
        if len(title) < 1:
            messages.error(request, "Title cannot be left blank")
            validBook = False
        if Book.objects.filter(title=title):
            messages.error(request, "Book has already been entered")
            validBook = False
        if len(review) < 1:
            messages.error(request, "Please fill out a review")
            validBook = False
        if rating == 'select':
            messages.error(request, "Rating needs to be chosen")
            validBook = False
        if author_list == 'select' and validBook == True:
            if len(author_name) < 1:
                messages.error(request, "An author needs to be chosen or created")
                validAuthor = False
                return validAuthor
            if author_check:
                messages.error(request, "Author has already been created")
                validAuthor = False
            else:
                validAuthor = True
                author = Author.objects.create(name=author_name)
        if author_list != 'select' and validBook == True:
            if len(author_name) > 0:
                messages.error(request, "Author needs to be created before being selected")
                validAuthor = False
                return validAuthor
            else:
                validAuthor = True
                author = Author.objects.get(name=author_list)
        if validBook == True and validAuthor == True:
            Book.objects.create(title=title, author=author)
            book_add = Book.objects.get(title=title)
            Review.objects.create(review=review, rating=rating, user=user, book=book_add)
            messages.success(request, "Review has been submitted")
        return validBook

    def newReview(self, postData, request):
        review = postData['review']
        rating = postData['rating']
        title = postData['title']
        validReview = True
        if len(review) == 0 or rating == 'select':
            messages.error(request, "Please provide a review and rating")
            validReview = False
        else:
            user = User.objects.get(id=request.session['user']['id'])
            book_add = Book.objects.get(title=title)
            Review.objects.create(review=review, rating=rating, user=user, book=book_add)
            messages.success(request, "Review and rating have been submitted")
        return validReview

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, related_name='book_author')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = BookManager()

class Review(models.Model):
    review = models.TextField()
    rating = models.IntegerField()
    user = models.ForeignKey(User, related_name='review_user')
    book = models.ForeignKey(Book, related_name='review_book')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

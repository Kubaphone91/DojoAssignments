# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import messages
import re, bcrypt

email_check = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# Create your models here.

class UserManager(models.Manager):
    def checkReg(self, postData, request):
        first_name = postData['first_name']
        last_name = postData['last_name']
        email = postData['email']
        password = postData['password']
        confirm_pass = postData['confirm_pass']
        validReg = True
        if len(first_name) < 2 or len(last_name) < 2:
            messages.error(request, 'First and Last name must contain at least 2 characters')
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
            User.objects.create(first_name=first_name, last_name=last_name, email=email, password=pw_hash)
        return validReg

    def checkLog(self, postData, request):
        email = postData['email_log']
        password = postData['password_log']
        validLog = True

        if len(email) < 1 or len(password) < 1:
            messages.error(request, 'Username and password must be filled in')
            validLog = False

        elif User.objects.filter(email=email):
            db_password = User.objects.get(email=email).password.encode()
            password_hash = password.encode()
            if bcrypt.hashpw(password_hash, db_password) == db_password:
                messages.success(request, User.objects.get(email=email).email + " has successfully logged in!")
                validLog = True
            else:
                messages.error(request, 'Username or password is incorrect')
                validLog = False
        else:
            messages.error(request, 'Username or password is incorrect')
            validLog = False
        return validLog





class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    def __str__(self):
        return self.id, self.firstName, self.lastName, self.email

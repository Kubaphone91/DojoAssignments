# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import messages
from django.utils.dateparse import parse_date
import re, bcrypt
import datetime

# Create your models here.
class UserManager(models.Manager):
    def checkReg(self, postData, request):
        name = postData['name']
        username = postData['username']
        password = postData['password']
        confirm_pass = postData['confirm_pass']
        validReg = True
        if len(name) < 3 or len(username) < 3:
            messages.error(request, 'Name and Username must have at least three characters.')
            validReg = False
        if len(password) < 8:
            messages.error(request, 'Password must contain at least eight characters.')
            validReg = False
        if password != confirm_pass:
            messages.error(request, 'Passwords do not match.')
            validReg = False
        if User.objects.filter(username=username):
            messages.error(request, 'Username has already been taken, please choose another.')
            validReg = False

        if validReg == True:
            messages.success(request, username + " was successfully registered!")
            pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            User.objects.create(name=name, username=username, password=pw_hash)
            pull_user = User.objects.get(username=username)
            request.session['user'] = {
                'id': pull_user.id,
                'name': pull_user.name,
                'username': pull_user.username
            }
        return validReg

    def checkLog(self, postData, request):
        username = postData['username_log']
        password = postData['password_log']
        validLog = True
        pull_user = User.objects.filter(username=username)

        if len(username) < 1 or len(password) < 1:
            messages.error(request, 'Username and password must be filled out.')
            validLog = False
        elif not pull_user:
            messages.error(request, 'Username or password is incorrect')
            validLog = False
        else:
            db_password = User.objects.get(username=username).password.encode()
            password_hash = password.encode()
            pull_user = User.objects.get(username=username)
            if bcrypt.hashpw(password_hash, db_password) == db_password:
                request.session['user'] = {
                    'id': pull_user.id,
                    'name': pull_user.name,
                    'username': pull_user.username
                }
                validLog = True
            else:
                messages.error(request, 'Username or password is incorrect.')
                validLog = False
        return validLog

class User(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

class TravelManager(models.Manager):
    def checkTravel(self, postData, request):
        user = User.objects.get(id=request.session['user']['id'])
        destination = postData['destination']
        description = postData['description']
        travel_date_from = postData['travel_date_from']
        travel_date_to = postData['travel_date_to']
        validCheck = True

        if len(destination) < 1 or len(description) < 1:
            messages.error(request, 'Destination and description must be filled out.')
            validCheck = False
        if len(travel_date_from) < 1 or len(travel_date_to) < 1:
            messages.error(request, 'Travel dates must be chosen.')
            validCheck = False
            return validCheck
        else:
            date_parsed = datetime.datetime.strptime(travel_date_from, "%m-%d-%Y").date()
            date_parsed2 = datetime.datetime.strptime(travel_date_to, "%m-%d-%Y").date()
            date_check = datetime.datetime.now().date()

            if date_parsed < date_check or date_parsed2 < date_check:
                    messages.error(request, "Future date must be chosen")
                    validCheck = False
            elif date_parsed2 < date_parsed:
                    messages.error(request, "End Date must be after Start Date.")
                    validCheck = False
            else:
                    messages.success(request, "Trip has been created!")
                    Travel.objects.create(destination=destination, description=description, user=user, travel_date_from=travel_date_from, travel_date_to=travel_date_to)

class Travel(models.Model):
    destination = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    travel_date_from = models.CharField(max_length=10)
    travel_date_to = models.CharField(max_length=10)
    joined_travelers = models.ManyToManyField(User, related_name='trips_joined')


    objects = TravelManager()

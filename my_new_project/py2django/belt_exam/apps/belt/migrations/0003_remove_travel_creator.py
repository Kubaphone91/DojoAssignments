# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-03 04:35
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('belt', '0002_auto_20170702_2325'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='travel',
            name='creator',
        ),
    ]
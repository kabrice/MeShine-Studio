# Generated by Django 2.0.2 on 2018-03-01 00:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meshine_api', '0004_auto_20180228_1037'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='summary',
            name='tags',
        ),
        migrations.DeleteModel(
            name='Tag',
        ),
    ]

# Generated by Django 2.0.2 on 2018-04-21 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meshine_api', '0014_auto_20180418_0355'),
    ]

    operations = [
        migrations.AddField(
            model_name='summary',
            name='validation_level',
            field=models.IntegerField(default=1),
        ),
    ]

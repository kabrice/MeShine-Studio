# Generated by Django 2.0.2 on 2018-04-18 03:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meshine_api', '0013_auto_20180415_0203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='summary',
            name='title',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='summary',
            name='validated',
            field=models.BooleanField(default=True),
        ),
    ]

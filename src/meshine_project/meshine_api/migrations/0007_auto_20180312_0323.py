# Generated by Django 2.0.2 on 2018-03-12 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meshine_api', '0006_auto_20180310_1248'),
    ]

    operations = [
        migrations.AddField(
            model_name='summary',
            name='html_content',
            field=models.TextField(default='<htm><p>Hello Me</p></html>'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='summary',
            name='validated',
            field=models.BooleanField(default=False),
        ),
    ]

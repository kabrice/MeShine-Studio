# Generated by Django 2.0.2 on 2018-12-05 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meshine_api', '0016_typeface'),
    ]

    operations = [
        migrations.AddField(
            model_name='summary',
            name='project_content',
            field=models.TextField(blank=True),
        ),
    ]

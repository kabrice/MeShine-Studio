# Generated by Django 2.0.2 on 2018-04-10 02:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meshine_api', '0004_questionsummary_main_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='questionsummary',
            name='is_question_author',
            field=models.BooleanField(default=False),
        ),
    ]

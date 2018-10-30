# Generated by Django 2.0.2 on 2018-04-14 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meshine_api', '0010_summary_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='summary',
            name='questions',
            field=models.ManyToManyField(null=True, through='meshine_api.QuestionSummary', to='meshine_api.Question'),
        ),
    ]

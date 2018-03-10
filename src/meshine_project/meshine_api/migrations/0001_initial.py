# Generated by Django 2.0.2 on 2018-02-27 20:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0009_alter_user_last_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('firstname', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
                ('mobile', models.CharField(max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Animation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('duration', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='AnimationType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Object',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='ObjectType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Summary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('url', models.URLField()),
                ('cover_image', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name_plural': 'Summaries',
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfileSummary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_author', models.BooleanField(default=False)),
                ('summary', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meshine_api.Summary')),
                ('user_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'User profile summaries',
            },
        ),
        migrations.AddField(
            model_name='summary',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='summaries', to='meshine_api.Tag'),
        ),
        migrations.AddField(
            model_name='summary',
            name='userProfileSummary',
            field=models.ManyToManyField(through='meshine_api.UserProfileSummary', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='object',
            name='object_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meshine_api.ObjectType'),
        ),
        migrations.AddField(
            model_name='object',
            name='summary',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meshine_api.Summary'),
        ),
        migrations.AddField(
            model_name='animation',
            name='animation_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meshine_api.AnimationType'),
        ),
        migrations.AddField(
            model_name='animation',
            name='object',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meshine_api.Object'),
        ),
    ]

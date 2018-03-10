from django.contrib import admin

from . import models

# Register your models here.
admin.site.register(models.UserProfile)
admin.site.register(models.Tag)
admin.site.register(models.Summary)
admin.site.register(models.UserProfileSummary)
admin.site.register(models.ObjectType)
admin.site.register(models.Object)
admin.site.register(models.AnimationType)
admin.site.register(models.Animation)


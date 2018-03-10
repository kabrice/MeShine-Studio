from django.db import models

__all__ = ('ObjectType',)

class ObjectType(models.Model):
    """Type of an object that can be animated"""
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
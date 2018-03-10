from django.db import models

__all__ = ('Object',)

class Object(models.Model):
    """Object that can be animated"""
    location = models.CharField(max_length=255)
    object_type = models.ForeignKey('ObjectType', on_delete=models.CASCADE)
    summary = models.ForeignKey('Summary', on_delete=models.CASCADE)

    def __str__(self):
        return self.location
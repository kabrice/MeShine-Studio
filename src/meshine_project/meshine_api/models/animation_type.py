from django.db import models

__all__ = ('AnimationType',)

class AnimationType(models.Model):
    """Type of an animation that feature an object"""
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
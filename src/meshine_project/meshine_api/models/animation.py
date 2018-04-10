from django.db import models

__all__ = ('Animation',)

class Animation(models.Model):
    """Animation of an object"""
    animation_type = models.ForeignKey('AnimationType', on_delete=models.CASCADE)
    object = models.ForeignKey('Object', on_delete=models.CASCADE)
    duration = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} --- {} --- {}".format(
            self.animation_type.name,
            self.object.location,
            self.duration
        )
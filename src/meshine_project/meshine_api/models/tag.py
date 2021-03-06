from django.db import models

__all__ = ('Tag',)

class Tag(models.Model):

    title = models.CharField(max_length=255, unique=True)
    is_from_human = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
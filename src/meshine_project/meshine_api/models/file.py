from django.db import models

__all__ = ('File',)

class File(models.Model):
    """FIle that can be animated"""
    content = models.FileField(upload_to='userCreations/userName/gallery/', unique=True)
    file_type = models.ForeignKey('FileType', on_delete=models.CASCADE)
    owner = models.ForeignKey('UserProfile', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content.path


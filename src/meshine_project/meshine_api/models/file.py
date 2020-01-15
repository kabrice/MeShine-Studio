from django.db import models

__all__ = ('File',)


class File(models.Model):
    """File object"""
    content = models.FileField(upload_to='userCreations/userName/gallery/',
                               default='userCreations/userName/gallery/1.JPG')
    file_type = models.ForeignKey('FileType', on_delete=models.CASCADE)
    additional_content = models.FileField(upload_to='userCreations/userName/file/',
                                          default='userCreations/userName/gallery/1.JPG')
    owner = models.ForeignKey('UserProfile', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content.path

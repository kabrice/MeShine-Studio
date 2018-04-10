from django.db import models

__all__ = ('Category',)

class Category(models.Model):

    title = models.CharField(max_length=255, unique=True)
    description = models.TextField(null=True, blank=True)
    tags = models.ManyToManyField('Tag', through='TagCategory')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Categories"

    @property
    def tags_indexing(self):
        """Tags for indexing.

        Used in Elasticsearch indexing.
        """
        return [tag.title for tag in self.tags.all()]

    @property
    def null_field_indexing(self):
        """null_field for indexing.

        Used in Elasticsearch indexing/tests of `isnull` functional filter.
        """
        return None
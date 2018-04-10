from django.db import models

__all__ = ('Summary',)

class Summary(models.Model):

    url = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    html_text = models.TextField(blank=True, unique=True)
    url_local_path = models.CharField(max_length=255)
    validated = models.BooleanField(default=False)
    cover_image = models.CharField(max_length=255)
    tag_category = models.ManyToManyField('TagCategory', default=[])
    user_profiles = models.ManyToManyField('UserProfile', through='UserProfileSummary')
    questions = models.ManyToManyField('Question', through='QuestionSummary')

    def __str__(self):
        return self.html_text

    class Meta:
        verbose_name_plural = "Summaries"


    @property
    def null_field_indexing(self):
        """null_field for indexing.

        Used in Elasticsearch indexing/tests of `isnull` functional filter.
        """
        return None
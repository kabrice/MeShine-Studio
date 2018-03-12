from django.db import models

__all__ = ('Summary',)

class Summary(models.Model):

    question_text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    url = models.URLField(null=False)
    html_content = models.TextField()
    validated = models.BooleanField(default=False)
    cover_image = models.CharField(max_length=255)
    tags = models.ManyToManyField('Tag', related_name='summaries', blank=True)
    userProfileSummary = models.ManyToManyField('UserProfile', through='UserProfileSummary')

    def __str__(self):
        return self.question_text

    class Meta:
        verbose_name_plural = "Summaries"

    @property
    def tags_indexing(self):
        """Tags for indexing.

        Used in Elasticsearch indexing.
        """
        return [tag.title for tag in self.tags.all()]

    @property
    def userProfileSummary_indexing(self):
        """Tags for indexing.

        Used in Elasticsearch indexing.
        """
        return [UserProfileSummary.is_author for UserProfileSummary in self.UserProfileSummarys.all()]

    @property
    def null_field_indexing(self):
        """null_field for indexing.

        Used in Elasticsearch indexing/tests of `isnull` functional filter.
        """
        return None
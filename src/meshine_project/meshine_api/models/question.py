from django.db import models

__all__ = ('Question',)

class Question(models.Model):

    title = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    score = models.FloatField(default=0)

    def __str__(self):
        return self.title


    @property
    def tags_indexing(self):
        """Tags for indexing.

        Used in Elasticsearch indexing.
        """
        return [tag.title for tag in self.tags.all()]

    @property
    def questionSummary_indexing(self):
        """Tags for indexing.

        Used in Elasticsearch indexing.
        """
        return [QuestionSummary.is_author for QuestionSummary in self.QuestionSummarys.all()]

    @property
    def null_field_indexing(self):
        """null_field for indexing.

        Used in Elasticsearch indexing/tests of `isnull` functional filter.
        """
        return None
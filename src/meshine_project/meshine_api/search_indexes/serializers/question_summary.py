from django_elasticsearch_dsl_drf.serializers import DocumentSerializer

from ..documents import QuestionSummaryDocument

__all__ = ('QuestionSummarySerializer',)


class QuestionSummarySerializer(DocumentSerializer):
    """Serializer for QuestionSummmary document."""

    class Meta(object):
        """Meta options."""

        document = QuestionSummaryDocument
        fields = (
            'id',
            'is_summary_author',
            'main_question',
            'last_modified_date',
            'question',
            'summary',
        )

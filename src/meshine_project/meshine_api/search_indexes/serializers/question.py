from rest_framework import serializers
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer

from ..documents import QuestionDocument

__all__ = ('QuestionDocumentSerializer',)



class QuestionDocumentSerializer(DocumentSerializer):
    """Serializer for the Book document."""

    class Meta(object):
        """Meta options."""

        document = QuestionDocument
        fields = (
            'id',
            'title'
        )

    score = serializers.SerializerMethodField()

    def get_score(self, obj):
        if hasattr(obj.meta, 'score'):
            return obj.meta.score
        return None

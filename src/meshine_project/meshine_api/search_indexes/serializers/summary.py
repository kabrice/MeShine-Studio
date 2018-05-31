from rest_framework import serializers
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer

from ..documents import SummaryDocument

__all__ = (
    'SummaryDocumentSerializer',
    'SummaryDocumentSimpleSerializer',
)


class SummaryDocumentSerializer(serializers.Serializer):
    """Serializer for the Book document."""

    id = serializers.IntegerField(read_only=True)
    html_text = serializers.CharField(read_only=True)
    url = serializers.CharField(read_only=True)

    validated = serializers.BooleanField(read_only=True)
    created_at = serializers.DateField(read_only=True)
    #user_profile_summaries = serializers.SerializerMethodField()
    # Used in testing of `isnull` functional filter.
    null_field = serializers.CharField(read_only=True,
                                       required=False,
                                       allow_blank=True)

    class Meta(object):
        """Meta options."""

        fields = (
            'id',
            '_score',
            'html_text',
            'url',
            'cover_image',
            'created_at',
            'null_field',  # Used in testing of `isnull` functional filter.
        )
        read_only_fields = fields

    def create(self, validated_data):
        """Create.

        Do nothing.

        :param validated_data:
        :return:
        """

    def update(self, instance, validated_data):
        """Update.

        Do nothing.

        :param instance:
        :param validated_data:
        :return:
        """

class SummaryDocumentSimpleSerializer(DocumentSerializer):
    """Serializer for the Book document."""

    highlight = serializers.SerializerMethodField()

    class Meta(object):
        """Meta options."""

        document = SummaryDocument
        fields = (
            'id',
            '_score',
            'html_text',
            'url',
            'validated',
            'created_at',
            'highlight',  # Used in highlight tests
            'null_field',  # Used in testing of `isnull` functional filter.
        )

    def get_highlight(self, obj):
        if hasattr(obj.meta, 'highlight'):
            return obj.meta.highlight.__dict__['_d_']
        return {}

    score = serializers.SerializerMethodField()

    def get_score(self, obj):
        if hasattr(obj.meta, 'score'):
            return obj.meta.score
        return None

from rest_framework import serializers
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer

from ..documents import CategoryDocument

__all__ = (
    'CategoryDocumentSerializer',
    'CategoryDocumentSimpleSerializer',
)


class CategoryDocumentSerializer(serializers.Serializer):
    """Serializer for the category document."""

    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    tags = serializers.SerializerMethodField()
    created_at = serializers.DateField(read_only=True)

    class Meta(object):
        """Meta options."""

        fields = (
            'id',
            '_score',
            'title',
            'description',
            'tags',
            'created_at',
            'null_field',
        )

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
    def get_tags(self, obj):
        """Get tags."""
        if obj.tags:
            return list(obj.tags)
        else:
            return []
    score = serializers.SerializerMethodField()

    def get_score(self, obj):
        if hasattr(obj.meta, 'score'):
            return obj.meta.score
        return None

class CategoryDocumentSimpleSerializer(DocumentSerializer):
    """Serializer for the Book document."""

    highlight = serializers.SerializerMethodField()

    class Meta(object):
        """Meta options."""

        document = CategoryDocument
        fields = (
            'id',
            '_score',
            'title',
            'description',
            'tags',
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

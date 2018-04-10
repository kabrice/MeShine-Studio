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
    created_at = serializers.DateField(read_only=True)

    class Meta(object):
        """Meta options."""

        fields = (
            'id',
            'title',
            'description',
            'created_at',
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

class CategoryDocumentSimpleSerializer(DocumentSerializer):
    """Serializer for the Book document."""

    highlight = serializers.SerializerMethodField()

    class Meta(object):
        """Meta options."""

        document = CategoryDocument

    def get_highlight(self, obj):
        if hasattr(obj.meta, 'highlight'):
            return obj.meta.highlight.__dict__['_d_']
        return {}

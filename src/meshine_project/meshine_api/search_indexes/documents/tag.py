from django.conf import settings

from django_elasticsearch_dsl import DocType, Index, fields
from django_elasticsearch_dsl_drf.compat import KeywordField, StringField

from meshine_api.models import Tag

from .analyzers import html_strip

from elasticsearch_dsl.analysis import (
    CustomAnalyzer,
    CustomTokenizer,
    CustomTokenFilter,
    CustomCharFilter,
)

custom_analyzer = CustomAnalyzer._type_shortcut
custom_tokenizer = CustomTokenizer._type_shortcut
custom_token_filter = CustomTokenFilter._type_shortcut
custom_char_filter = CustomCharFilter._type_shortcut

__all__ = ('TagDocument',)

INDEX = Index(settings.ELASTICSEARCH_INDEX_NAMES[__name__])

# See Elasticsearch Indices API reference for available settings
INDEX.settings(
    number_of_shards=1,
    number_of_replicas=1
)


@INDEX.doc_type
class TagDocument(DocType):
    """Tag Elasticsearch document."""

    id = fields.IntegerField(attr='id')

    title = StringField(
        analyzer=html_strip,
        fields={
            'raw': KeywordField(),
            'suggest': fields.CompletionField(),
            'lower': StringField(analyzer=html_strip)
        }
    )

    created_at = fields.DateField()


    class Meta(object):
        """Meta options."""

        model = Tag  # The model associate with this DocType



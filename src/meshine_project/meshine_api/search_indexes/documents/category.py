from django.conf import settings

from django_elasticsearch_dsl import DocType, Index, fields
from django_elasticsearch_dsl_drf.compat import KeywordField, StringField

from meshine_api.models import Category

from .analyzers import html_strip

from elasticsearch_dsl.analysis import (
    CustomAnalyzer,
    CustomTokenizer,
    CustomTokenFilter,
    CustomCharFilter,
)

# shortcuts for direct use
custom_analyzer = CustomAnalyzer._type_shortcut
custom_tokenizer = CustomTokenizer._type_shortcut
custom_token_filter = CustomTokenFilter._type_shortcut
custom_char_filter = CustomCharFilter._type_shortcut


__all__ = ('CategoryDocument',)


INDEX = Index(settings.ELASTICSEARCH_INDEX_NAMES[__name__])

# See Elasticsearch Indices API reference for available settings
INDEX.settings(
    number_of_shards=1,
    number_of_replicas=1
)


@INDEX.doc_type
class CategoryDocument(DocType):
    """Category Elasticsearch document."""


    # ID
    id = fields.IntegerField(attr='id')

    # ********************************************************************
    # *********************** Main data fields for search ****************
    # ********************************************************************

    title = StringField(
        fields={
            'raw': KeywordField(),
            'suggest': fields.CompletionField(),
            'lower': StringField(analyzer=html_strip)
        }
    )

    description = StringField(
        fields={
            'raw': KeywordField(),
        }
    )

    # ********************************************************************
    # ********** Additional fields for search and filtering **************
    # ********************************************************************


    # Creation date
    created_at = fields.DateField()


    # Tags

    tags = fields.ObjectField(
        properties={
            'id': fields.IntegerField(),
            'title': StringField(
                analyzer=html_strip,
                fields={
                    'raw': KeywordField(),
                    'suggest': fields.CompletionField(),
                }
            ),
        })

    null_field = fields.StringField(attr='null_field_indexing')

    class Meta(object):
        """Meta options."""

        model = Category  # The model associate with this DocType








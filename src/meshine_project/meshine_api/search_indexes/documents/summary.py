from django.conf import settings

from django_elasticsearch_dsl import DocType, Index, fields
from django_elasticsearch_dsl_drf.compat import KeywordField, StringField

from meshine_api.models import Summary

from .analyzers import html_strip


__all__ = ('SummaryDocument',)


INDEX = Index(settings.ELASTICSEARCH_INDEX_NAMES[__name__])

# See Elasticsearch Indices API reference for available settings
INDEX.settings(
    number_of_shards=1,
    number_of_replicas=1
)


@INDEX.doc_type
class SummaryDocument(DocType):
    """Summary Elasticsearch document."""


    # ID
    id = fields.IntegerField(attr='id')

    # ********************************************************************
    # *********************** Main data fields for search ****************
    # ********************************************************************

    question_text = StringField(
        fields={
            'raw': KeywordField(),
        }
    )

    url = StringField(
        fields={
            'raw': KeywordField(),
        }
    )

    # ********************************************************************
    # ********** Additional fields for search and filtering **************
    # ********************************************************************


    # Creation date
    created_at = fields.DateField()

    # Cover image
    cover_image = StringField()

    # UserProfileSummary
    """
    userProfileSummary = fields.ListField(
        StringField(
            analyzer=html_strip,
            fields={
                'raw': KeywordField(),
            }, fielddata= True
        )
    )
    """
    # Tags
    tags = StringField(
        attr='tags_indexing',
        analyzer=html_strip,
        fields={
            'raw': KeywordField(multi=True),
            'suggest': fields.CompletionField(multi=True),
        },
        multi=True
    )

    null_field = fields.StringField(attr='null_field_indexing')

    class Meta(object):
        """Meta options."""

        model = Summary  # The model associate with this DocType


    def prepare_userProfileSummary(self, instance):
        """Prepare authors."""
        return [author.name for author in []]





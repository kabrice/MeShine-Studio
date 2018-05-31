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

    html_text = StringField(
        analyzer=html_strip,
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

    validated = fields.BooleanField()


    tag_category = fields.ObjectField(
         properties={
             'id': fields.IntegerField(),
            'tag': fields.ObjectField(
                 properties={
                     'id': fields.IntegerField(),
                     'title': StringField(
                         analyzer=html_strip,
                         fields={
                             'raw': KeywordField(),
                             'suggest': fields.CompletionField(),
                         }
                     ),
                     'is_from_human': fields.BooleanField(),
                     'created_at': fields.DateField(),
                 }
             ),
             'category': fields.ObjectField(
                 properties={
                     'id': fields.IntegerField(),
                     'title': StringField(
                         analyzer=html_strip,
                         fields={
                             'raw': KeywordField(),
                             'suggest': fields.CompletionField(),
                         }
                     ),
                     'created_at': fields.DateField(),
                    'description': StringField(),
                 }
             ),
        }
    )

    #user_profiles = fields.ObjectField()

    #questions = fields.ObjectField()

    null_field = fields.StringField(attr='null_field_indexing')

    class Meta(object):
        """Meta options."""

        model = Summary  # The model associate with this DocType


    def prepare_html_text(self, instance):
        """Prepare summary."""
        return instance.html_text[:32766]





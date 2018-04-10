from django.conf import settings

from django_elasticsearch_dsl import DocType, Index, fields
from django_elasticsearch_dsl_drf.compat import KeywordField, StringField

from meshine_api.models import QuestionSummary

from .analyzers import html_strip


__all__ = ('QuestionSummaryDocument',)

INDEX = Index(settings.ELASTICSEARCH_INDEX_NAMES[__name__])

# See Elasticsearch Indices API reference for available settings
INDEX.settings(
    number_of_shards=1,
    number_of_replicas=1
)


@INDEX.doc_type
class QuestionSummaryDocument(DocType):
    """Address Elasticsearch document."""

    # ID
    id = fields.IntegerField(attr='id')
    is_summary_author = fields.BooleanField()
    main_question = fields.BooleanField()
    last_modified_date = fields.DateField()

    # question object
    question = fields.ObjectField(
        properties={
            'title': StringField(
                analyzer=html_strip,
                fields={
                    'raw': KeywordField(),
                    'suggest': fields.CompletionField(),
                }
            ),
            'score': fields.FloatField(),
            'created_at': fields.DateField(),
        }
    )

    # summary object
    summary = fields.ObjectField(
        properties={
            #'id': fields.IntegerField(),
            'url': StringField(
                analyzer=html_strip,
                fields={
                    'raw': KeywordField(),
                    'suggest': fields.CompletionField(),
                }
            ),
            'html_text': StringField(
                analyzer=html_strip,
                fields={
                    'raw': KeywordField(),
                    'suggest': fields.CompletionField(),
                }
            ),
            'validated': fields.BooleanField(),
            'created_at': fields.DateField(),
            'user_profiles': fields.ObjectField(
                properties = {
                    'id': fields.IntegerField(),
                    'email': StringField(),
                    'is_active': fields.BooleanField(),
                    'is_staff': fields.BooleanField(),
                }
            ),
            'tag_category': fields.ObjectField(
                properties={
                    #'id': fields.IntegerField(),
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
                            #'id': fields.IntegerField(),
                            'title': StringField(
                                analyzer=html_strip,
                                fields={
                                    'raw': KeywordField(),
                                    'suggest': fields.CompletionField(),
                                }
                            ),
                            'description': StringField(),
                        }
                    ),
                }
            )
        }
    )

    class Meta(object):
        """Meta options."""

        model = QuestionSummary  # The model associate with this DocType

from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_GEO_DISTANCE,
    LOOKUP_FILTER_GEO_POLYGON,
    LOOKUP_FILTER_GEO_BOUNDING_BOX,
    # SUGGESTER_TERM,
    # SUGGESTER_PHRASE,
    SUGGESTER_COMPLETION,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FacetedSearchFilterBackend,
    FilteringFilterBackend,
    IdsFilterBackend,
    DefaultOrderingFilterBackend,
    OrderingFilterBackend,
    SearchFilterBackend,
    SuggesterFilterBackend,
    HighlightBackend,
)

from django_elasticsearch_dsl_drf.pagination import LimitOffsetPagination
from django_elasticsearch_dsl_drf.views import BaseDocumentViewSet

from ..documents import QuestionSummaryDocument
from ..serializers import QuestionSummarySerializer

__all__ = (
    'QuestionSummaryDocumentViewSet',
)


class QuestionSummaryDocumentViewSet(BaseDocumentViewSet):
    """The QuestionSummaryDocument view."""

    document = QuestionSummaryDocument
    serializer_class = QuestionSummarySerializer
    lookup_field = 'id'
    filter_backends = [
        FilteringFilterBackend,
        OrderingFilterBackend,
        SearchFilterBackend,
        DefaultOrderingFilterBackend,
        SuggesterFilterBackend,
    ]
    pagination_class = LimitOffsetPagination
    # Define search fields
    search_fields = (
        #'is_summary_author',
        'main_question',
        #'last_modified_date',
        'question.title',
        #'question.score',
        #'question.created_at'
        'summary.url',
        'summary.html_text',
        #'summary.validated',
        #'summary.user_profiles.id',
        #'summary.created_at',
        #'summary.tag_category.id',
        'summary.tag_category.tag.title',
        #'summary.tag_category.tag.is_from_human',
        #'summary.tag_category.tag.created_at',
        'summary.tag_category.category.title',
        'summary.tag_category.category.description',
    )
    # Define filtering fields
    filter_fields = {
        'id': None,
        'question': 'question.title.raw',
        'summary': 'summary.url.raw',
    }
    # Define ordering fields
    ordering_fields = {
        'id': None,
        'is_summary_author': None,
        'is_question_author': None,
        'last_modified_date': None,
        'question': 'question.title.raw',
        'summary': 'summary.url.raw',
    }

    # Specify default ordering
    ordering = (
        'id',
        'question.title.raw',
        # 'city.country.name.raw',
    )

    # Suggester fields
    suggester_fields = {
        'question_suggest': {
            'field': 'question.name.suggest',
            'suggesters': [
                SUGGESTER_COMPLETION,
            ],
        },
        'summary_suggest': {
            'field': 'summary.url.name.suggest',
            'suggesters': [
                SUGGESTER_COMPLETION,
            ],
        }
    }

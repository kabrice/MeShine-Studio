from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_GEO_DISTANCE,
    LOOKUP_FILTER_GEO_POLYGON,
    LOOKUP_FILTER_GEO_BOUNDING_BOX,
    # SUGGESTER_TERM,
    # SUGGESTER_PHRASE,
    SUGGESTER_COMPLETION,
    LOOKUP_FILTER_TERMS,
    LOOKUP_FILTER_RANGE,
    LOOKUP_FILTER_PREFIX,
    LOOKUP_FILTER_WILDCARD,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
    LOOKUP_QUERY_EXCLUDE,
    LOOKUP_QUERY_ISNULL,
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
    search_fields = {
        'main_question': {'boost': 1},
        'question.title': {'boost': 1},
        'summary.url': {'boost': 1},
        'summary.html_text': {'boost': 1},
        'summary.user_profiles.id': {'boost': 1},
        'summary.tag_category.tag.title': {'boost': 1},
        'summary.tag_category.category.title': {'boost': 1},
        'summary.tag_category.category.description': {'boost': 1},
    }
    # Define highlight fields
    highlight_fields = {
        'summary.html_text': {
            'options': {
                'fragment_size': 5550,
                'number_of_fragments': 3
            }
        },
    }
    # Define filtering fields
    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_GT,
                LOOKUP_QUERY_GTE,
                LOOKUP_QUERY_LT,
                LOOKUP_QUERY_LTE,
                LOOKUP_FILTER_TERMS,
            ],
        },
        'question.title': 'question.title.lower',
        'main_question': 'main_question',
        'summary.user_profiles.id': 'summary.user_profiles.id',
        'summary.url': 'summary.url',
        'summary.html_text': 'summary.html_text',
        'summary.tag_category.tag.title': 'summary.tag_category.tag.title',
        'summary.tag_category.category.title': 'summary.tag_category.category.title',
        'summary.tag_category.category.description': 'summary.tag_category.category.description',
    }
    # Define ordering fields
    ordering_fields = {
        'id': None,
        'is_summary_author': None,
        'is_question_author': None,
        'last_modified_date': None,
        'question': 'question.title.raw',
        'summary': 'summary.url.raw',
        '_score': '_score',
    }

    # Specify default ordering
    ordering = (
        'id',
        'question.title.raw',
        '_score',
        # 'city.country.name.raw',
    )

    # Suggester fields
    suggester_fields = {
        'html_text_suggest': 'summary.html_text',
    }

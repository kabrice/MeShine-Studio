from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_PREFIX,
    LOOKUP_FILTER_RANGE,
    LOOKUP_FILTER_TERMS,
    LOOKUP_FILTER_WILDCARD,
    LOOKUP_QUERY_EXCLUDE,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_ISNULL,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
    SUGGESTER_PHRASE,
    SUGGESTER_TERM,
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
from django_elasticsearch_dsl_drf.views import BaseDocumentViewSet

from elasticsearch_dsl import DateHistogramFacet, RangeFacet

from ..documents import SummaryDocument
from ..serializers import SummaryDocumentSimpleSerializer

__all__ = (
    'SummaryDocumentViewSet',
)


class SummaryDocumentViewSet(BaseDocumentViewSet):
    """The SummaryDocument view."""

    document = SummaryDocument
    # serializer_class = SummaryDocumentSerializer
    serializer_class = SummaryDocumentSimpleSerializer
    lookup_field = 'id'
    filter_backends = [
        FilteringFilterBackend,
        IdsFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        SearchFilterBackend,
        FacetedSearchFilterBackend,
        SuggesterFilterBackend,
        HighlightBackend,
    ]
    # Define search fields
    search_fields = {
        'url': {'boost': 2},
        'html_text': {'boost': 4},
    }
    # Define highlight fields
    highlight_fields = {
        'url': {},
    }
    # Define filter fields
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

        'url': 'url.raw',
        'created_at': 'created_at',
        'tag_category': {
            'field': 'tag_category',
            'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
                LOOKUP_QUERY_ISNULL,
            ],
        },
        'tag_category.raw': {
            'field': 'tag_category.raw',
            'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
            ],
        },
       # This has been added to test `exists` filter.
        'non_existent_field': 'non_existent_field',
        # This has been added to test `isnull` filter.
        'null_field': 'null_field',
    }
    # Define ordering fields
    ordering_fields = {
        'tag_category': 'tag_category.raw',
        'created_at': 'created_at',
        'url': 'url.raw',
        'id': 'id',
        '_score': '_score',
    }
    # Specify default ordering
    ordering = ('id', '_score', 'url',)
    faceted_search_fields = {
        'url': 'url.raw',
        'created_at': {
            'field': 'created_at',
            'facet': DateHistogramFacet,
            'options': {
                'interval': 'year',
            }
        },
    }

    # Suggester fields
    suggester_fields = {
        'html_text_suggest': 'html_text',
    }

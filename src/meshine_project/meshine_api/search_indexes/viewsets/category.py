from django_elasticsearch_dsl_drf.constants import (
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
from django_elasticsearch_dsl_drf.views import BaseDocumentViewSet
from django_elasticsearch_dsl_drf.pagination import LimitOffsetPagination

from elasticsearch_dsl import DateHistogramFacet, RangeFacet

from ..documents import CategoryDocument
from ..serializers import CategoryDocumentSerializer, CategoryDocumentSimpleSerializer


class CategoryDocumentViewSet(BaseDocumentViewSet):
    """The CategoryDocument view."""

    document = CategoryDocument
    serializer_class = CategoryDocumentSimpleSerializer
    pagination_class = LimitOffsetPagination

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
    search_fields = (
        'title',
        'description',
        'tags.title',
    )

    highlight_fields = {

        'title': {},
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

        'title': 'title.lower',
        'description': 'description.raw',
        'created_at': 'created_at',
        'tags': {
            'field': 'tags',
            'lookups': [
                LOOKUP_FILTER_TERMS,
                LOOKUP_FILTER_PREFIX,
                LOOKUP_FILTER_WILDCARD,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_EXCLUDE,
                LOOKUP_QUERY_ISNULL,
            ],
        },
        'tags.raw': {
            'field': 'tags.raw',
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

    # Specify default ordering
    ordering_fields = {
        'created_at': 'created_at',
        'description': 'description.raw',
        'title': 'title.raw',
        'id': 'id',
        '_score': '_score',
    }
    ordering = ('id', 'title', '_score')
    faceted_search_fields = {
        'title': 'title.raw',
        'description': 'description.raw',
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
        'title_suggest': 'title.suggest',
        'description_suggest': 'description.suggest',
        'tag_suggest': 'tags.suggest',
    }

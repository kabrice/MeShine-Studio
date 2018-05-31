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
from django_elasticsearch_dsl_drf.filter_backends.filtering.common import FilteringFilterBackend

from ..documents import TagDocument
from ..serializers import TagDocumentSerializer

__all__ = (
    'TagDocumentViewSet',
)


class TagDocumentViewSet(BaseDocumentViewSet, FilteringFilterBackend):
    """The TagDocument view."""

    document = TagDocument
    serializer_class = TagDocumentSerializer
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
        'title',
    )


    # Define filtering fields
    filter_fields = {
        'id': None,
        'title': 'title.lower',
        'created_at': 'created_at',

    }

    # Define ordering fields
    ordering_fields = {
        'id': None,
        'title': None,
        'created_at': 'created_at'
    }
    # Specify default ordering
    ordering = (
        'id',
        'title.raw',
    )

    # Suggester fields
    suggester_fields = {
        'title_suggest': {
            'field': 'title.suggest',
            'suggesters': [
                SUGGESTER_COMPLETION,
            ],
        }
    }

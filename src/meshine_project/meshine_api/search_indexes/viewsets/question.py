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

from ..documents import QuestionDocument
from ..serializers import QuestionDocumentSerializer

__all__ = (
    'QuestionDocumentViewSet',
)


class QuestionDocumentViewSet(BaseDocumentViewSet, FilteringFilterBackend):
    """The QuestionDocument view."""

    document = QuestionDocument
    serializer_class = QuestionDocumentSerializer
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
        'created_at': 'created_at',
        '_score': '_score',
    }
    # Specify default ordering
    ordering = (
        'id',
        'title.raw',
        '_score',
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

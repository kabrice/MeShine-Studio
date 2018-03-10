from django.conf.urls import url, include
from .rest_framework_extensions_routers_compat import ExtendedDefaultRouter
# from rest_framework_extensions.routers import ExtendedDefaultRouter
from .viewsets import (
    SummaryDocumentViewSet,
    TagDocumentViewSet,
)

__all__ = ('urlpatterns',)

router = ExtendedDefaultRouter()

addresses = router.register(
    r'summaries',
    SummaryDocumentViewSet,
    base_name='summarydocument'
)

authors = router.register(
    r'tags',
    TagDocumentViewSet,
    base_name='tagdocument'
)

urlpatterns = [
    url(r'^', include(router.urls)),
]

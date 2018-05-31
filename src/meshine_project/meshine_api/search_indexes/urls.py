from django.conf.urls import url, include
from .rest_framework_extensions_routers_compat import ExtendedDefaultRouter
# from rest_framework_extensions.routers import ExtendedDefaultRouter
from .viewsets import (
    SummaryDocumentViewSet,
    TagDocumentViewSet,
    CategoryDocumentViewSet,
    QuestionSummaryDocumentViewSet,
    QuestionDocumentViewSet,
)

__all__ = ('urlpatterns',)

router = ExtendedDefaultRouter()

summaries = router.register(
    r'summaries',
    SummaryDocumentViewSet,
    base_name='summarydocument'
)

tags = router.register(
    r'tags',
    TagDocumentViewSet,
    base_name='tagdocument'
)

categories = router.register(
    r'categories',
    CategoryDocumentViewSet,
    base_name='categorydocument'
)

questionsummaries = router.register(
    r'questionsummaries',
    QuestionSummaryDocumentViewSet,
    base_name='questionsummarydocument'
)

questions = router.register(
    r'questions',
    QuestionDocumentViewSet,
    base_name='questiondocument'
)

urlpatterns = [
    url(r'^', include(router.urls)),
]

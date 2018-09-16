from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from . import views

router = DefaultRouter()
router.register('Hello-viewset', views.HelloViewSet, base_name='hello-viewset')
router.register('user', views.UserProfileViewSet) #We don't specify a basename when working with a model viewset
router.register('login', views.LoginViewSet, base_name='login')
router.register('tag', views.TagViewSet)
router.register('objectType', views.ObjectTypeViewSet)
router.register('object', views.ObjectViewSet)
router.register('animationType', views.AnimationTypeViewSet)
router.register('animation', views.AnimationViewSet)
router.register('question', views.QuestionViewSet)
router.register('questionSummary', views.QuestionSummaryViewSet)
router.register('tagCategory', views.TagCategoryViewSet)
router.register('typeFace', views.TypeFaceViewSet)

urlpatterns= [
    path('hello-view/', views.HelloApiView.as_view()),
    path('summary/', views.SummaryListView.as_view()),
    path('category/', views.CategoryViewSet.as_view()),
    path('summary/<int:pk>/', views.SummaryView.as_view()),
    path('userProfileSummary/<int:id>/', views.UserProfileSummaryViewSet.as_view()),
    path('', include(router.urls))
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
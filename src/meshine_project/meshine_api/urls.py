from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('Hello-viewset', views.HelloViewSet, base_name='hello-viewset')
router.register('profile', views.UserProfileViewSet) #We don't specify a basename when working with a model viewset
router.register('login', views.LoginViewSet, base_name='login')
router.register('summary', views.SummaryViewSet)
router.register('userProfileSummary', views.UserProfileSummaryViewSet)
router.register('objectType', views.ObjectTypeViewSet)
router.register('object', views.ObjectViewSet)
router.register('animationType', views.AnimationTypeViewSet)
router.register('animation', views.AnimationViewSet)


urlpatterns= [
    path('hello-view/', views.HelloApiView.as_view()),
    path('', include(router.urls))
]
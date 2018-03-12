from django.shortcuts import render

from rest_framework import viewsets, generics
from rest_framework.views import APIView
from .models import Summary
from rest_framework.response import Response
from rest_framework import status, filters
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from . import serializers, models, permissions

import requests
from bs4 import BeautifulSoup

# Create your views here.

class HelloApiView(APIView):
    """Test API View."""

    serializer_class = serializers.HelloSerializer

    def get(self, request, format=None):
        """Returns a list of APIView features."""

        an_apiview = [
            'Uses HTTP methods as function (get, post, patch, put, delete)',
            'It is similar to a traditional Django View',
            'Gives you the most control over your logic',
            'Is mapped manually to URLs'
        ]

        return Response({'message': 'Hello!', 'an_apiview': an_apiview})

    def post(self, request):
        """Create a hello message with our name"""

        serializer = serializers.HelloSerializer(data=request.data)

        if serializer.is_valid():
            name = serializer.data.get('name')
            message = 'Hello {0}'.format(name)
            return Response({'message': message})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        """Handles updating an object."""

        return Response({'method': 'put'})

    def patch(self, request, pk=None):
        """Patch request, only updates fields provided in the request"""
        return Response({'method': 'patch'})

    def delete(self, request, pk=None):
        """Deletes an object."""
        return Response({'method': 'delete'})

class HelloViewSet(viewsets.ViewSet):
    """Test API ViewSet"""

    serializer_class = serializers.HelloSerializer

    def list(self, request):
        """Return a hello message."""

        a_viewset = [
            'Uses actions (list, create, retrieve, update, partial_update)',
            'Automatically maps to URLs using Routers',
            'Provides more functionality with less code']

        return Response({'message': 'Hello!', 'a_viewset': a_viewset})

    def create(self, request):
        """Create a new hello message"""

        serializer = serializers.HelloSerializer(data=request.data)

        if serializer.is_valid():
            name = serializer.data.get('name')
            message = 'Hello {0}'.format(name)
            return Response({'message': message})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        """Handles getting an object by its ID."""
        return Response({'http_method': 'GET'})

    def update(self, request, pk=None):
        """Handles updating an object."""
        return Response({'http_method': 'PATCH'})

    def destroy(self, request, pk=None):
        """Handles removing an object."""
        return Response({'http_method': 'DELETE'})


class UserProfileViewSet(viewsets.ModelViewSet):
    """Handles creating, creating and updating profiles"""

    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfile.objects.all().order_by('id')
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'email',)

class LoginViewSet(viewsets.ViewSet):
    """Checks email and password and returns an auth tokens"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        """Use the ObtainAuthToken APIView to validate and create a token"""

        return ObtainAuthToken().post(request)

class SummaryListViewSet(APIView):

    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)

    def get(self, request, format=None):
        url = "https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333"
        r = requests.get(url)
        soup = BeautifulSoup(r.content, "html.parser")
        links = soup.findAll("a")
        summary = Summary.objects.all()
        serializer = serializers.SummarySerializer(summary, many=True)

        return Response([r.content])


class SummaryViewSet(APIView):

    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)

    """
    Retrieve, update or delete a summary instance.
    """
    def get_object(self, pk):
        try:
            return Summary.objects.get(pk=pk)
        except Summary.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        summary = self.get_object(pk)
        serializer = serializers.SummarySerializer(summary)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        summary = self.get_object(pk)
        serializer = SummarySerializer(summary, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        summary = self.get_object(pk)
        summary.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class UserProfileSummaryViewSet(generics.ListAPIView):
    #serializer_class = serializers.UserProfileSummarySerializer
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.UserProfileSummarySerializer

    permission_classes = (permissions.PostOwnStatus, IsAuthenticated)

    def get_queryset(self):
        """
        This view should return a list of all the summary
        for the currently authenticated user.
        """
        id = self.kwargs['id']
        return models.UserProfileSummary.objects.filter(user_profile__id=id)



class ObjectTypeViewSet(viewsets.ModelViewSet):

    
    serializer_class = serializers.ObjectTypeSerializer
    queryset = models.ObjectType.objects.all().order_by('id')

    def perform_create(self, serializer):
        """Sets the user profile to the logged in user"""
        serializer.save()

class ObjectViewSet(viewsets.ModelViewSet):

    
    serializer_class = serializers.ObjectSerializer
    queryset = models.Object.objects.all().order_by('id')

    def perform_create(self, serializer):
        """Sets the user profile to the logged in user"""
        serializer.save()

class AnimationTypeViewSet(viewsets.ModelViewSet):

    
    serializer_class = serializers.AnimationTypeSerializer
    queryset = models.AnimationType.objects.all().order_by('id')

    def perform_create(self, serializer):
        """Sets the user profile to the logged in user"""
        serializer.save()

class AnimationViewSet(viewsets.ModelViewSet):

    
    serializer_class = serializers.AnimationSerializer
    queryset = models.Animation.objects.all().order_by('id')

    def perform_create(self, serializer):
        """Sets the animation to the logged in user"""
        serializer.save()

class TagViewSet(viewsets.ModelViewSet):


    serializer_class = serializers.TagSerializer
    queryset = models.Tag.objects.all().order_by('id')

    def perform_create(self, serializer):
        """Sets the animation to the logged in user"""
        serializer.save()




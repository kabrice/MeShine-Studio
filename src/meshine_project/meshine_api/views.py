import requests
import os
import logging
from django.conf import settings
from uuid import uuid4
from django.http import Http404, JsonResponse
from rest_framework import status, filters
from rest_framework import viewsets, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .WebMetaDataGenerator.WebMetaDataGenerator import WebMetaDataGenerator
from .HtmlFileGenerator.HtmlFileGenerator import HtmlFileGenerator
from .HtmlFileGenerator.BmJsonGenerator import BmJsonGenerator
from . import serializers, models, permissions
from .models import Summary, Category, Tag, TagCategory, Question, QuestionSummary, FileType, UserProfile, File
from requests_oauthlib import OAuth1
from django.core.files.base import ContentFile
import re, base64
from django.db import transaction

# Summary level validations
URL_LEVEL = 1
TAG_LEVEL = 2
QUESTION_LEVEL = 3
AUTH = OAuth1("b5288e7fe68744eaad6e4784bbc1def6", "bcc28b8d49b74990baec3abe7f198c77")


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


class SummaryListView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)

    def get(self, request, format=None):
        summary = Summary.objects.all()
        serializer = serializers.SummarySerializer(summary, many=True)

        return Response(serializer.data)

    def post(self, request, format=None):
        try:
            web_meta_data_generator = WebMetaDataGenerator(request.data['url'])
        except:
            logging.exception('Views >>> SummaryListView >>> post 146')
            return Response(
                {"Weird error! Please retry."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )

        try:
            meta_data = web_meta_data_generator.generate_meta_data()
        except:
            return Response(
                {"Can't generate meta data. Please try again and contact us if it persists."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )

        # Check if the text content of the url already exist
        #   Delete every useless punct first on the text and then pass it the EL url
        html_text = web_meta_data_generator.clean_punct(meta_data["html_text"])
        html_text = html_text[:2710]
        resp = requests.get(
            'http://localhost:8080/search/summaries/?search=html_text|' + html_text + "&ordering=-_score&limit=1")
        data = resp.json()
        # print("data count ", data["count"])
        if data["count"] > 0:
            # mlt = more like this
            mlt_text = data["results"][0]["html_text"]
            sim = web_meta_data_generator.similar(mlt_text, html_text)
            # the threshold is set to 0.80, but it could change
            if sim > 0.80:
                return Response(
                    {"The html content of this url does already exist. Please contact us if it doesn't."},
                    status=status.HTTP_403_FORBIDDEN
                )
        # print("html_text", html_text)
        file_name = "output-" + str(uuid4()) + ".html"
        request.data.update({
            "title": meta_data['title'],
            "html_text": html_text,
            "url_local_path": "/media/urls/" + file_name
        })
        serializer = serializers.SummarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            try:
                with open(os.path.join(settings.MEDIA_ROOT + "/urls", file_name), 'w') as f:
                    f.write(str(meta_data["soup_to_send"]))
                    f.close()

                summary = Summary.objects.get(pk=serializer.data['id'])
                # pprint('request ***', request)
                print('request str ***', request.__dict__)
                user_profile_summary = models.UserProfileSummary(is_author=True, user_profile=request.user,
                                                                 summary=summary)
                user_profile_summary.save()
                output = serializer.data
                search_fields = []
                for tag in meta_data['tags']:
                    search_fields = search_fields + ['search=tags.title|' + tag]
                if len(search_fields) > 1:
                    search_fields = "&".join(search_fields)
                # Get the 5th related topics
                resp = requests.get(
                    'http://localhost:8080/search/categories/?' + search_fields + '&ordering=-_score&limit=5')

                data_categories = resp.json()
                output["categories"] = data_categories["results"]
                output["tags"] = meta_data['tags']
                return Response(output, status=status.HTTP_201_CREATED)
            except:
                Summary.objects.get(pk=serializer.data['id']).delete()
                logging.exception('Views >>> SummaryListView >>> post 191')
                return Response("Can't save because of an error.", status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SummaryView(APIView):
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
        questions = request.data.get("questions")
        svgs = request.data.get("svgs")
        # print('svg ', svgs)
        svgs2 = svgs;
        if questions:
            qs = None
            for i, question in enumerate(questions):
                try:
                    new_question, created = Question.objects.get_or_create(title=question.get("title"))
                    try:
                        qs = QuestionSummary.objects.create(is_summary_author=True,
                                                            is_question_author=created,
                                                            question=new_question,
                                                            summary=summary,
                                                            main_question=(i == 0))
                    except:
                        pass
                except:
                    return Response(
                        {"Can't generate meta data. Please try again and contact us if it persists."},
                        status=status.HTTP_400_BAD_REQUEST
                    )

            print("summary", request.data)
            serializer = serializers.QuestionSummarySerializer(qs)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        elif svgs:
            """
            Creating the HTML file of the player
            """
            test = HtmlFileGenerator(svgs2)
            test.create_file()
            # print("svg", svgs)
            # for svg in svgs:
            #    print("svg", svg.get("svg"))

    def delete(self, request, pk, format=None):
        summary = self.get_object(pk)
        summary.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserProfileSummaryViewSet(generics.ListAPIView):
    # serializer_class = serializers.UserProfileSummarySerializer
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.UserProfileSummarySerializer

    permission_classes = (permissions.PostOwnStatus, IsAuthenticated)

    def get_queryset(self):
        """
        This view should return a list of all the summary
        for the currently authenticated user.
        """
        print('0000####', self.kwargs)
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


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.QuestionSerializer
    queryset = models.Question.objects.all().order_by('id')

    def perform_create(self, serializer):
        serializer.save()


class QuestionSummaryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.QuestionSummarySerializer
    queryset = models.QuestionSummary.objects.all().order_by('id')

    def perform_create(self, serializer):
        serializer.save()


class CategoryViewSet(APIView):
    serializer_class = serializers.CategorySerializer

    def get(self, request, format=None):
        category = Category.objects.all()
        serializer = serializers.CategorySerializer(category, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        print("categories", request.data.get("tagCategories"))
        categories = request.data.get("tagCategories")
        summary = Summary.objects.get(pk=request.data.get("idSummary"))
        output_tags = []
        output_categories = []
        # new_tag, new_tagcategory, new_summary = "", "", ""

        for category in categories:
            try:
                new_topic, created = Category.objects.get_or_create(title=category.get("title"))
            except:
                pass
            for tag in category.get("tags"):
                try:
                    new_tag, created = Tag.objects.get_or_create(title=tag.get("title"),
                                                                 is_from_human=tag.get("isFromHuman"))
                    output_tags.append(new_tag)
                    try:
                        # print("new_topic new_tag", new_topic, new_tag)
                        new_tagcategory, created = TagCategory.objects.update_or_create(tag=new_tag,
                                                                                        category=new_topic)
                        output_categories.append(new_tagcategory)
                        try:
                            summary.tag_category.add(new_tagcategory)
                        except:
                            pass

                    except:
                        pass
                except:
                    pass
        return Response(categories, status=status.HTTP_201_CREATED)


class TagCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TagCategorySerializer
    queryset = models.TagCategory.objects.all().order_by('id')

    def perform_create(self, serializer):
        """Sets the animation to the logged in user"""
        serializer.save()


class TypeFaceViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TypeFaceSerializer
    queryset = models.TypeFace.objects.all().order_by('id')

    def perform_create(self, serializer):
        """Sets the animation to the logged in user"""
        serializer.save()


class TheNounProjectIcons(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)

    def get(self, request, icon_name, pk=None):
        endpoint = "http://api.thenounproject.com/icons/" + icon_name + "?limit_to_public_domain=100&limit=100"
        response = requests.get(endpoint, auth=AUTH)
        return Response(response.content, status=status.HTTP_200_OK)


class FileViewSet(APIView):
    authentication_classes = (TokenAuthentication,)
    file_serializer = serializers.FileSerializer
    permission_classes = [permissions.UpdateOwnProfile]

    def get(self, request, pk):

        user = UserProfile.objects.get(pk=pk)
        files = models.File.objects.filter(owner=user)
        serializer = serializers.FileSerializer(files, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk):

        user = UserProfile.objects.get(pk=pk)
        with transaction.atomic():
            if 'fileList' in request.data:
                for req in request.data["fileList"]:
                    codec = req["file"]
                    base64_data = re.sub('^data:.+;base64,', '', codec)
                    base64_data += '=' * (-len(base64_data) % 4)
                    byte_data = base64.b64decode(base64_data)
                    data = ContentFile(byte_data, name=req["name"])
                    print('data file', data)
                    file_type = FileType.objects.get(name=req["fileType"].title())
                    file = models.File(content=data, owner=user, file_type=file_type)
                    file.save()
            else:
                data = bs64_normalizer(request.data)
                # print('data', data)
                name = request.data["fileType"].title()
                file_type = FileType.objects.get(name=name)
                file = models.File(content=data, additional_content=data, owner=user, file_type=file_type)
                file.save()
                bm = BmJsonGenerator(request.data["jsonData"])
                svg_string = bm.create_svg()
                file = File.objects.latest('id')
                print('file==========', file)
                return JsonResponse({'svg_string': str(svg_string), 'id': file.pk, 'name': name})

        files = models.File.objects.filter(owner=user)
        serializer = serializers.FileSerializer(files, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        name = request.data["fileType"].title()
        file_type = FileType.objects.get(name=name)
        print('file_type', file_type)
        user = UserProfile.objects.get(pk=pk)
        print('data["jsonB64"]', request.data["name"])
        data = bs64_normalizer(request.data)
        print('bs64_normalizer(request.data)', data)
        print('-------------------------===============')
        file = File.objects.get(pk=request.data["id"])
        file.content = data
        file.save()
        # File.objects.update_or_create(content=data, defaults={'pk': request.data["id"]})
        # file.update_or_create(content=bs64_normalizer(request.data))
        files = models.File.objects.filter(owner=user, file_type=file_type)
        serializer = serializers.FileSerializer(files, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


def bs64_normalizer(data):
    print('data["jsonB64"]', data["name"])
    codec = data["jsonB64"]
    base64_data = re.sub('^data:.+;base64,', '', codec)
    base64_data += '=' * (-len(base64_data) % 4)
    byte_data = base64.b64decode(base64_data)
    data = ContentFile(byte_data, name=data["name"])
    return data

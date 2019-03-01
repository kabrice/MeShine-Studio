import requests
import os
import logging
from django.conf import settings
from uuid import uuid4
from django.http import Http404
from rest_framework import status, filters
from rest_framework import viewsets, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core import serializers as djangoserializers

from .WebMetaDataGenerator.WebMetaDataGenerator import WebMetaDataGenerator
from .HtmlFileGenerator.HtmlFileGenerator import HtmlFileGenerator
from . import serializers, models, permissions
from .models import Summary, Category, Tag, TagCategory, Question, QuestionSummary

# Summary level validations
URL_LEVEL = 1
TAG_LEVEL = 2
QUESTION_LEVEL = 3

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
        resp = requests.get('http://localhost:8080/search/summaries/?search=html_text|'+html_text+"&ordering=-_score&limit=1")
        data = resp.json()
        #print("data count ", data["count"])
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
        #print("html_text", html_text)
        file_name = "output-"+str(uuid4())+".html"
        request.data.update({
                                "title": meta_data['title'],
                                "html_text": html_text,
                                "url_local_path": "/media/urls/"+file_name
                            })
        serializer = serializers.SummarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            try:
                with open(os.path.join(settings.MEDIA_ROOT+"/urls", file_name), 'w') as f:
                    f.write(str(meta_data["soup_to_send"]))
                    f.close()

                summary = Summary.objects.get(pk=serializer.data['id'])
                user_profile_summary = models.UserProfileSummary(is_author=True, user_profile=request.user, summary=summary)
                user_profile_summary.save()
                output = serializer.data
                search_fields = []
                for tag in meta_data['tags']:
                    search_fields = search_fields + ['search=tags.title|'+tag]
                if len(search_fields)>1:
                    search_fields = "&".join(search_fields)
                #Get the 5th related topics
                resp = requests.get('http://localhost:8080/search/categories/?'+search_fields+'&ordering=-_score&limit=5')

                data_categories = resp.json()
                output["categories"] = data_categories["results"]
                output["tags"] = meta_data['tags']
                return Response(output, status=status.HTTP_201_CREATED)
            except:
                Summary.objects.get(pk=serializer.data['id']).delete()
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
        svgs2 = [ { 'animEntry': 3, 'svg': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="464" height="825" viewBox="0 0 464 825" xml:space="preserve">\n<desc>Created with Fabric.js 2.4.3</desc>\n<defs>\n</defs>\n<g transform="matrix(1 0 0 1 232 412.5)" >\n<rect style="stroke: None; stroke-width: 1; stroke-dasharray: None; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(128,128,128); fill-rule: nonzero; opacity: 1;" x="-231.5" y="-412" rx="0" ry="0" width="463" height="824" />\n</g>\n</svg>', 'isText': False, 'speed': 2.12, 'data': "{'id': 'drawingRect', 'loop': False, 'duration': 1000}", 'jsonPath': './assets/data1.json', 'isStatic': False, 'object': { 'height': 824, 'top': 99.5, 'shadow': None, 'flipX': False, 'type': 'rect', 'width': 463, 'scaleX': 1, 'fill': 'gray', 'clipTo': None, 'strokeDashArray': None, 'paintFirst': 'fill', 'id': 'drawingRect', 'strokeLineJoin': 'miter', 'strokeWidth': 1, 'fillRule': 'nonzero', 'flipY': False, 'originX': 'left', 'visible': True, 'originY': 'top', 'transformMatrix': None, 'scaleY': 1, 'globalCompositeOperation': 'source-over', 'strokeLineCap': 'butt', 'opacity': 1, 'left': 109.66, 'skewY': 0, 'backgroundColor': '', 'angle': 0, 'stroke': None, 'skewX': 0, 'strokeMiterLimit': 4, 'version': '2.4.3', 'rx': 0, 'ry': 0 }, 'duration': 1, 'id': 'drawingRect', 'animation': { 'html': 'common', 'js': 'animejs_popup', 'css': 'common' }, 'loop': False, 'zIndex': 4, '_boundingRect': { 'left': 109.65999999999997, 'height': 825, 'top': 99.5, 'width': 464 } }, { 'animEntry': 1, 'svg': None, 'isText': False, 'data': "{'id': 'img75204205', 'loop': False, 'duration': null, 'speed': 1, 'jsonPath': 'http://localhost:8081/assets/Gallery2/img_0.png'}", 'isStatic': False, 'object': { 'height': 841, 'top': 512.5, 'shadow': None, 'filters': [], 'flipX': False, 'type': 'image', 'width': 487, 'src': 'http://localhost:8081/assets/Gallery2/img_0.png', 'scaleX': 0.98, 'fill': 'rgb(0,0,0)', 'clipTo': None, 'strokeDashArray': None, 'paintFirst': 'fill', 'id': 'img75204205', 'strokeLineJoin': 'miter', 'strokeWidth': 0, 'fillRule': 'nonzero', 'flipY': False, 'originX': 'center', 'visible': True, 'originY': 'center', 'transformMatrix': None, 'scaleY': 0.98, 'cropY': 0, 'globalCompositeOperation': 'source-atop', 'strokeLineCap': 'butt', 'opacity': 1, 'left': 342.16, 'skewY': 0, 'backgroundColor': '', 'angle': 0, 'stroke': None, 'skewX': 0, 'strokeMiterLimit': 4, 'version': '2.4.3', 'crossOrigin': '', 'cropX': 0 }, 'duration': None, 'id': 'img75204205', 'animation': { 'html': 'common', 'js': 'lottie', 'css': 'common' }, 'zIndex': 1, '_boundingRect': { 'left': 103.53000000000003, 'height': 824.1799999999998, 'top': 100.41000000000003, 'width': 477.25999999999993 } }, { 'animEntry': 2, 'svg': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="697.0934185498147" height="603.7398416865287" viewBox="0 0 697.09 603.74" xml:space="preserve">\n<desc>Created with Fabric.js 2.4.3</desc>\n<defs>\n</defs>\n<g transform="matrix(11.96 5.04 -3.11 7.39 348.55 301.87)" >\n<polygon style="stroke: None; stroke-width: 1; stroke-dasharray: None; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(25,115,217); fill-rule: nonzero; opacity: 1;" points="22,0 -22,25 -22,-25 " />\n</g>\n</svg>', 'isText': False, 'speed': None, 'data': "{'id': 'Shape10200', 'loop': False, 'duration': 1000}", 'jsonPath': 'null', 'isStatic': False, 'object': { 'height': 50, 'top': 544.29, 'shadow': None, 'flipX': False, 'type': 'polygon', 'width': 44, 'scaleX': 12.98, 'fill': '#1973D9', 'clipTo': None, 'strokeDashArray': None, 'paintFirst': 'fill', 'id': 'Shape10200', 'strokeLineJoin': 'miter', 'strokeWidth': 1, 'fillRule': 'nonzero', 'flipY': False, 'originX': 'left', 'visible': True, 'originY': 'top', 'transformMatrix': None, 'scaleY': 8.02, 'globalCompositeOperation': 'source-atop', 'strokeLineCap': 'butt', 'opacity': 1, 'left': 158.79, 'skewY': 0, 'backgroundColor': '', 'angle': 22.85, 'stroke': '', 'skewX': 0, 'strokeMiterLimit': 4, 'version': '2.4.3', 'points': [{ 'y': 25.00002, 'x': 44.00001 }, { 'y': 50.00002, 'x': -1.00000002e-05 }, { 'y': 1.00000002e-05, 'x': -1.00000002e-05 }] }, 'id': 'Shape10200', 'animation': { 'html': 'common', 'js': 'animejs_scale', 'css': 'common' }, 'loop': False, 'zIndex': 2, '_boundingRect': { 'left': -0.04064324995994184, 'height': 603.7398416865287, 'top': 544.29, 'width': 697.0934185498147 } }, { 'animEntry': 3, 'svg': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="298.9" height="85.1400000000001" viewBox="0 0 298.9 85.14" xml:space="preserve">\n<desc>Created with Fabric.js 2.4.3</desc>\n<defs>\n</defs>\n<g transform="matrix(6.1 0 0 2.58 149.45 42.57)" >\n<rect style="stroke: None; stroke-width: 1; stroke-dasharray: None; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" x="-24" y="-16" rx="0" ry="0" width="48" height="32" />\n</g>\n</svg>', 'isText': False, 'data': "{'id': 'rect75786250', 'loop': False, 'duration': 1000}", 'jsonPath': None, 'isStatic': False, 'object': { 'height': 32, 'top': 638, 'shadow': None, 'flipX': False, 'type': 'rect', 'width': 48, 'scaleX': 6.1, 'fill': '#ffffff', 'clipTo': None, 'strokeDashArray': None, 'paintFirst': 'fill', 'id': 'rect75786250', 'strokeLineJoin': 'miter', 'strokeWidth': 1, 'fillRule': 'nonzero', 'flipY': False, 'originX': 'center', 'visible': True, 'originY': 'center', 'transformMatrix': None, 'scaleY': 2.58, 'globalCompositeOperation': 'source-atop', 'strokeLineCap': 'butt', 'opacity': 1, 'left': 252.61, 'skewY': 0, 'backgroundColor': '', 'angle': 0, 'stroke': None, 'skewX': 0, 'strokeMiterLimit': 4, 'version': '2.4.3', 'rx': 0, 'ry': 0 }, 'id': 'rect75786250', 'animation': { 'html': 'common', 'js': 'animejs_popup', 'css': 'common' }, 'loop': False, 'zIndex': 3, '_boundingRect': { 'left': 103.16000000000003, 'height': 85.1400000000001, 'top': 595.43, 'width': 298.9 } }, { 'animEntry': 4, 'svg': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="284.896484375" height="86.42799999999988" viewBox="0 0 284.9 86.43" xml:space="preserve">\n<desc>Created with Fabric.js 2.4.3</desc>\n<defs>\n</defs>\n<g transform="matrix(1 0 0 1 142.45 43.21)" style="" >\n\t\t<text xml:space="preserve" font-family="Times" font-size="35" font-style="normal" font-weight="bold" style="stroke: None; stroke-width: 1; stroke-dasharray: None; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-141.95" y="-11.94" style="fill: rgb(25,115,217); white-space: pre; ">Ce que pensent les </tspan><tspan x="-141.95" y="33.93" style="fill: rgb(25,115,217); ">Nord-Coréens</tspan></text>\n</g>\n</svg>', 'isText': True, 'speed': 2.12, 'data': "{'id': text75854665, 'loop': False, 'duration': 1300}", 'jsonPath': None, 'isStatic': False, 'object': { 'textBackgroundColor': '', 'strokeWidth': 1, 'shadow': None, 'styles': { '1': { '2': { 'fill': '#1973d9' }, '5': { 'fill': '#1973d9' }, '7': { 'fill': '#1973d9' }, '11': { 'fill': '#1973d9' }, '4': { 'fill': '#1973d9' }, '1': { 'fill': '#1973d9' }, '6': { 'fill': '#1973d9' }, '8': { 'fill': '#1973d9' }, '3': { 'fill': '#1973d9' }, '9': { 'fill': '#1973d9' }, '10': { 'fill': '#1973d9' }, '0': { 'fill': '#1973d9' } }, '0': { '2': { 'fill': '#1973d9' }, '5': { 'fill': '#1973d9' }, '12': { 'fill': '#1973d9' }, '7': { 'fill': '#1973d9' }, '11': { 'fill': '#1973d9' }, '13': { 'fill': '#1973d9' }, '16': { 'fill': '#1973d9' }, '4': { 'fill': '#1973d9' }, '1': { 'fill': '#1973d9' }, '14': { 'fill': '#1973d9' }, '6': { 'fill': '#1973d9' }, '8': { 'fill': '#1973d9' }, '18': { 'fill': '#1973d9' }, '3': { 'fill': '#1973d9' }, '9': { 'fill': '#1973d9' }, '17': { 'fill': '#1973d9' }, '10': { 'fill': '#1973d9' }, '15': { 'fill': '#1973d9' }, '0': { 'fill': '#1973d9' } } }, 'charSpacing': 0, 'height': 85.43, 'strokeDashArray': None, 'fontSize': '35', 'scaleX': 1, 'clipTo': None, 'paintFirst': 'fill', 'strokeLineJoin': 'miter', 'id': 'text75854665', 'linethrough': False, 'skewX': 0, 'flipY': False, 'originX': 'center', 'visible': True, 'lineHeight': 1.16, 'angle': 0, 'skewY': 0, 'fillRule': 'nonzero', 'version': '2.4.3', 'fontFamily': 'Times', 'text': 'Ce que pensent les \nNord-Coréens', 'textAlign': 'left', 'top': 638.65, 'flipX': False, 'type': 'i-text', 'width': 283.9, 'fill': 'white', 'globalCompositeOperation': 'source-atop', 'transformMatrix': None, 'fontWeight': 'bold', 'originY': 'center', 'scaleY': 1, 'underline': False, 'opacity': 1, 'left': 262.82, 'backgroundColor': '', 'strokeLineCap': 'butt', 'stroke': None, 'overline': False, 'strokeMiterLimit': 4, 'fontStyle': 'normal' }, 'id': 'text75854665', 'animation': { 'html': 'common', 'js': 'dominos_dreams', 'css': 'common' }, 'loop': False, 'zIndex': 4, '_boundingRect': { 'left': 120.3717578125, 'height': 86.42799999999988, 'top': 595.436, 'width': 284.896484375 } }, { 'animEntry': 5, 'svg': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="258.90999999999997" height="41.61999999999989" viewBox="0 0 258.91 41.62" xml:space="preserve">\n<desc>Created with Fabric.js 2.4.3</desc>\n<defs>\n</defs>\n<g transform="matrix(1 0 0 1 129.45 20.81)" >\n<rect style="stroke: rgb(255,255,255); stroke-width: 5; stroke-dasharray: None; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(25,115,217); fill-rule: nonzero; opacity: 1;" x="-126.955" y="-18.31" rx="0" ry="0" width="253.91" height="36.62" />\n</g>\n</svg>', 'isText': False, 'speed': 2.12, 'data': "{'id': rect76015407, 'loop': False, 'duration': 1000}", 'jsonPath': None, 'isStatic': False, 'object': { 'height': 36.62, 'top': 578.25, 'shadow': None, 'flipX': False, 'type': 'rect', 'width': 253.91, 'scaleX': 1, 'fill': '#1973d9', 'clipTo': None, 'strokeDashArray': None, 'paintFirst': 'fill', 'id': 'rect76015407', 'strokeLineJoin': 'miter', 'strokeWidth': 5, 'fillRule': 'nonzero', 'flipY': False, 'originX': 'center', 'visible': True, 'originY': 'center', 'transformMatrix': None, 'scaleY': 1, 'globalCompositeOperation': 'source-atop', 'strokeLineCap': 'butt', 'opacity': 1, 'left': 239.69, 'skewY': 0, 'backgroundColor': '', 'angle': 0, 'stroke': '#ffffff', 'skewX': 0, 'strokeMiterLimit': 4, 'version': '2.4.3', 'rx': 0, 'ry': 0 }, 'duration': 1, 'id': 'rect76015407', 'animation': { 'html': 'common', 'js': 'animejs_scale', 'css': 'common' }, 'loop': False, 'zIndex': 5, '_boundingRect': { 'left': 110.23500000000001, 'height': 41.61999999999989, 'top': 557.44, 'width': 258.90999999999997 } }, { 'animEntry': 6, 'svg': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="240.45312500000003" height="23.59999999999991" viewBox="0 0 240.45 23.6" xml:space="preserve">\n<desc>Created with Fabric.js 2.4.3</desc>\n<defs>\n</defs>\n<g transform="matrix(1 0 0 1 120.23 11.8)" style="" >\n\t\t<text xml:space="preserve" font-family="Times" font-size="20" font-style="normal" font-weight="normal" style="stroke: None; stroke-width: 1; stroke-dasharray: None; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-119.73" y="6.28" >RENCONTRE TRUMP-KIM</tspan></text>\n</g>\n</svg>', 'isText': True, 'speed': 2.12, 'data': "{'id': text76149977, 'loop': False, 'duration': 1300}", 'jsonPath': False, 'isStatic': False, 'object': { 'textBackgroundColor': '', 'strokeWidth': 1, 'shadow': None, 'styles': {}, 'charSpacing': 0, 'height': 22.6, 'strokeDashArray': None, 'fontSize': '20', 'scaleX': 1, 'clipTo': None, 'paintFirst': 'fill', 'strokeLineJoin': 'miter', 'id': 'text76149977', 'linethrough': False, 'skewX': 0, 'flipY': False, 'originX': 'center', 'visible': True, 'lineHeight': 1.16, 'angle': 0, 'skewY': 0, 'fillRule': 'nonzero', 'version': '2.4.3', 'fontFamily': 'Times', 'text': 'RENCONTRE TRUMP-KIM', 'textAlign': 'left', 'top': 579, 'flipX': False, 'type': 'i-text', 'width': 239.45, 'fill': 'white', 'globalCompositeOperation': 'source-atop', 'transformMatrix': None, 'fontWeight': 'normal', 'originY': 'center', 'scaleY': 1, 'underline': False, 'opacity': 1, 'left': 240.6, 'backgroundColor': '', 'strokeLineCap': 'butt', 'stroke': None, 'overline': False, 'strokeMiterLimit': 4, 'fontStyle': 'normal' }, 'id': 'text76149977', 'animation': { 'html': 'common', 'js': 'dominos_dreams', 'css': 'common' }, 'loop': False, 'zIndex': 6, '_boundingRect': { 'left': 120.3734375, 'height': 23.59999999999991, 'top': 567.2, 'width': 240.45312500000003 } }];
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
            #print("svg", svgs)
            #for svg in svgs:
            #    print("svg", svg.get("svg"))

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
        #new_tag, new_tagcategory, new_summary = "", "", ""

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
                        #print("new_topic new_tag", new_topic, new_tag)
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
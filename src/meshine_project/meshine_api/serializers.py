from rest_framework import serializers
from . import models

class HelloSerializer(serializers.Serializer):
    """Serializes a name field for testing our APIView."""

    name = serializers.CharField(max_length=10)


class UserProfileSerializer(serializers.ModelSerializer):
    """A serializer for our user profile objects."""

    class Meta:
        model = models.UserProfile
        fields = ('id', 'email', 'name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """Create and return a new user."""

        user = models.UserProfile(
            email = validated_data['email'],
            name = validated_data['name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class SummarySerializer(serializers.ModelSerializer):
    """A serializer for summary item"""

    class Meta:
        model = models.Summary
        fields = ('id', 'question_text', 'created_at')


class UserProfileSummarySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserProfileSummary
        fields = ('id', 'user_profile', 'summary', 'is_author', 'created_at')
        extra_kwargs = {'user_profile': {'read_only': True}}


class ObjectTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ObjectType
        fields = ('id', 'name')

class ObjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Object
        fields = ('id', 'location', 'object_type', 'summary')

class AnimationTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.AnimationType
        fields = ('id', 'name')

class AnimationSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Animation
        fields = ('id', 'object', 'animation_type', 'duration')

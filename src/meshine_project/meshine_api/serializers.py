from rest_framework import serializers
from . import models

class HelloSerializer(serializers.Serializer):
    """Serializes a name field for testing our APIView."""

    name = serializers.CharField(max_length=10)


class UserProfileSerializer(serializers.ModelSerializer):
    """A serializer for our user profile objects."""

    class Meta:
        model = models.UserProfile
        extra_kwargs = {'password': {'write_only': True}}
        exclude = ('groups', 'last_login', 'is_superuser', 'user_permissions', 'created_at')

    def create(self, validated_data):
        """Create and return a new user."""

        user = models.UserProfile(
            email=validated_data['email'],
            firstname = validated_data['firstname'],
            lastname = validated_data['lastname'],
            mobile = validated_data['mobile']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class SummarySerializer(serializers.ModelSerializer):
    """A serializer for summary item"""

    class Meta:
        model = models.Summary
        exclude = ('user_profiles', 'questions',)
        depth = 2

class UserProfileSummarySerializer(serializers.ModelSerializer):
    summary = SummarySerializer()
    user_profile = UserProfileSerializer()
    class Meta:
        model = models.UserProfileSummary
        exclude = ('user_profile',)
        depth = 1


class ObjectTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ObjectType
        fields = ('id', 'name')

class ObjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Object
        fields = '__all__'

class AnimationTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.AnimationType
        fields = '__all__'

class AnimationSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Animation
        fields = '__all__'
        depth = 1


class TagSerializer(serializers.ModelSerializer):
    """A serializer for tag item"""
    #summary = SummarySerializer()

    class Meta:
        model = models.Tag
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Question
        fields = '__all__'

class QuestionSummarySerializer(serializers.ModelSerializer):
    summary = SummarySerializer()
    class Meta:
        model = models.QuestionSummary
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Category
        fields = '__all__'
        depth = 1
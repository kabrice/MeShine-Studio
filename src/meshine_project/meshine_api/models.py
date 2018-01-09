from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class UserProfileManager(BaseUserManager):
    """Helps Django work with our custom user model."""

    def create_user(self, email, name, password=None):
        """Creates a new user profile object."""

        if not email:
            raise ValueError('Users must have an email address.')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password):
        """Creates and saves a new superuser with given details"""

        user = self.create_user(email, name, password)

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user

class UserProfile(AbstractBaseUser, PermissionsMixin):
    """Represents a "User profile" inside our system."""

    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        """Used to get a users full name."""

        return self.name

    def get_short_name(self):
        """Used to get a users short name."""

        return self.name

    def __str__(self):
        """Django uses this when it needs to convert the object to a string"""

        return self.email

class Summary(models.Model):

    question_text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    userProfileSummary = models.ManyToManyField(UserProfile, through='UserProfileSummary')

    def __str__(self):
        return self.question_text

class UserProfileSummary(models.Model):
    """Manytomany table"""
    user_profile = models.ForeignKey('UserProfile', on_delete=models.CASCADE)
    summary = models.ForeignKey('Summary', on_delete=models.CASCADE)
    is_author = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)


class ObjectType(models.Model):
    """Type of an object that can be animated"""
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Object(models.Model):
    """Object that can be animated"""
    location = models.CharField(max_length=255)
    object_type = models.ForeignKey('ObjectType', on_delete=models.CASCADE)
    summary = models.ForeignKey('Summary', on_delete=models.CASCADE)

    def __str__(self):
        return self.location


class AnimationType(models.Model):
    """Type of an animation that feature an object"""
    name = models.CharField(max_length=255)



class Animation(models.Model):
    """Animation of an object"""
    object = models.ForeignKey('Object', on_delete=models.CASCADE)
    animation_type = models.ForeignKey('AnimationType', on_delete=models.CASCADE)
    duration = models.FloatField()







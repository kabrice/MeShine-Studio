from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from .user_profile_manager import UserProfileManager
__all__ = ('UserProfile',)


class UserProfile(AbstractBaseUser, PermissionsMixin):
    """Represents a "User profile" inside our system."""

    email = models.EmailField(max_length=255, unique=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    mobile = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstname']

    def get_full_name(self):
        """Used to get a users full name."""

        return self.firstname+" "+self.lastname

    def get_short_name(self):
        """Used to get a users short name."""

        return self.firstname

    def __str__(self):
        """Django uses this when it needs to convert the object to a string"""

        return self.email
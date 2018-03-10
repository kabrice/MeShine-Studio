from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserProfileManager(BaseUserManager):
    """Helps Django work with our custom user model."""

    def create_user(self, email, firstname, password=None):
        """Creates a new user profile object."""

        if not email:
            raise ValueError('Users must have an email address.')

        email = self.normalize_email(email)
        user = self.model(email=email, firstname=firstname)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, firstname, password):
        """Creates and saves a new superuser with given details"""

        user = self.create_user(email, firstname, password)

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user




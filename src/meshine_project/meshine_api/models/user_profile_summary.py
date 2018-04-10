from django.db import models

__all__ = ('UserProfileSummary',)

class UserProfileSummary(models.Model):
    """Manytomany table"""
    # ToDo: field modified_by (and tracking the history) and created_by
    is_author = models.BooleanField(default=False)
    last_modified_date = models.DateTimeField(auto_now_add=True)
    user_profile = models.ForeignKey('UserProfile', on_delete=models.CASCADE)
    summary = models.ForeignKey('Summary', on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "User profile summaries"

    def __str__(self):
        return "{} {} --- {}".format(
            self.user_profile.firstname,
            self.user_profile.lastname,
            self.summary.url
        )

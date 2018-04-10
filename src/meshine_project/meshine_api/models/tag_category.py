from django.db import models

__all__ = ('TagCategory',)

class TagCategory(models.Model):

    tag = models.ForeignKey('Tag', on_delete=models.CASCADE)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    last_modified_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Tag categories"

    def __str__(self):
        return "{} --- {}".format(
            self.tag.title,
            self.category.title
        )
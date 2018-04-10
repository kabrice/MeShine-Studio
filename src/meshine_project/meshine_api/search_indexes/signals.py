"""
Our `books.Book` model has relational fields that are indexed as well. In order
to keep the Book document index fresh, we not only need to update it upon
update of every `books.Book` instance (which is done automatically in
the `django_elasticsearch_dsl`), but also make sure that upon updates in any
of the indexed related fields (such as foreign keys and many-to-many fields;
in case of `books.Book` model one of them is `publisher`) the Book index is
updated as well.
"""
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from django_elasticsearch_dsl.registries import registry

__all__ = (
    'update_document',
    'delete_document',
)


@receiver(post_save)
def update_document(sender, **kwargs):
    """Update document on added/changed records.

    Update Book document index if related `books.Publisher` (`publisher`),
    `books.Author` (`authors`), `books.Tag` (`tags`) fields have been updated
    in the database.
    """
    app_label = sender._meta.app_label
    model_name = sender._meta.model_name
    instance = kwargs['instance']

    if app_label == 'meshine_api':
        if model_name == 'Category':
            instances = instance.tags.all()
            for _instance in instances:
                registry.update(_instance)

        if model_name == 'QuestionSummary':
            instances = instance.summary.all()
            print("EDGAR QuestionSummary INSTANCES", instances)
            for _instance in instances:
                registry.update(_instance)
        if model_name == 'Summary':
            instances = instance.questionSummaries.all()
            print("EDGAR Summary INSTANCES", instances)
            for _instance in instances:
                registry.update(_instance)


@receiver(post_delete)
def delete_document(sender, **kwargs):
    """Update document on deleted records.

    Updates Book document from index if related `books.Publisher`
    (`publisher`), `books.Author` (`authors`), `books.Tag` (`tags`) fields
    have been removed from database.
    """
    app_label = sender._meta.app_label
    model_name = sender._meta.model_name
    instance = kwargs['instance']

    if app_label == 'meshine_api':
        # If it is `books.Publisher` that is being updated.
        if model_name == 'Category' or model_name == 'QuestionSummary' or model_name == 'Summary':
            instances = instance.meshine_api.all()
            for _instance in instances:
                registry.update(_instance)
                registry.delete(_instance, raise_on_error=False)


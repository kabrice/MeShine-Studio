from django.db import models

__all__ = ('QuestionSummary',)

class QuestionSummary(models.Model):
    """Manytomany table"""
    # ToDo: field modified_by (and tracking the history) and created_by
    is_summary_author = models.BooleanField(default=False)
    is_question_author = models.BooleanField(default=False)
    last_modified_date = models.DateTimeField(auto_now_add=True)
    question = models.ForeignKey('Question', on_delete=models.CASCADE)
    summary = models.ForeignKey('Summary', on_delete=models.CASCADE)
    main_question = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Question summaries"

    def __str__(self):
        return "{} --- {}".format(
            self.question.title,
            self.summary.url
        )
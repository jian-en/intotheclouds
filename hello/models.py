from django.db import models


class Greeting(models.Model):
    when = models.DateTimeField('date created', auto_now_add=True)


class PotentialCustomer(models.Model):

    name = models.CharField(max_length=128)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-created_at', )

    def __unicode__(self):
        return self.name

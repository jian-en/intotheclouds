from django.forms import ModelForm

from hello.models import PotentialCustomer


class PotentialCustomerForm(ModelForm):

    class Meta:
        model = PotentialCustomer
        fields = ['name', 'email']

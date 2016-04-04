from django.contrib import admin

from hello.models import PotentialCustomer


class PotentialCustomerAdmin(admin.ModelAdmin):
    fields = ('name', 'email')

admin.site.register(PotentialCustomer, PotentialCustomerAdmin)

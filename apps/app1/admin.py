from django.contrib import admin
from .models import DumyModel


@admin.register(DumyModel)
class DumyAdmin(admin.ModelAdmin):
    list_display = ['name']

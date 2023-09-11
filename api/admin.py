from django.contrib import admin

# Register your models here.
from .models import Show, Season

admin.site.register(Show)
admin.site.register(Season)

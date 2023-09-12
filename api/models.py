from django.db import models
import requests
from pathlib import Path
import environ

env = environ.Env()
environ.Env.read_env()

# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    description = models.TextField()
    tmdb_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def create_seasons(self):
        url = f'https://api.themoviedb.org/3/tv/{self.tmdb_id}?api_key={env("TMDB_API_KEY")}'
        print(url)
        payload = {}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)
        data = response.json()
        print(data)
        number_of_seasons = data["number_of_seasons"]
        for i in range(1, number_of_seasons + 1):
            Season.objects.create(show=self, season_number=i)
        return self


class Season(models.Model):
    show = models.ForeignKey(Show, related_name="seasons", on_delete=models.CASCADE)
    season_number = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

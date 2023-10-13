from django.db import models

# Create your models here.
class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Layout(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    text_count = models.IntegerField()
    media_count = models.IntegerField()
    preview_img = models.CharField(max_length=100)
    json_data = models.JSONField(default=dict)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Animation(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    json_data = models.JSONField(default=dict)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name



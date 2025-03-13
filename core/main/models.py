from django.db import models
from django.contrib.auth.models import User

class Car(models.Model):
    
    name = models.CharField('car_name',max_length = 50)
    price = models.PositiveIntegerField('car_price')
    image = models.ImageField('car_image',upload_to='cars')
    
    def __str__(self):
        return self.name
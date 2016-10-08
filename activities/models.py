from mongoengine import Document
from mongoengine.base.fields import BaseField
from mongoengine.fields import StringField, DateTimeField, IntField
from datetime import datetime

TYPES = ['Running', 'TeamSport', 'Physiotherapy', 'Workout', 'Walking']


class Activities(Document):
    name = StringField(required=True, max_length=200)
    type = BaseField(choices=TYPES)
    time = DateTimeField(default=datetime.now())
    used_calories = IntField(min_value=0)

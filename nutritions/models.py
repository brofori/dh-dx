from mongoengine import Document
from mongoengine.base.fields import BaseField
from mongoengine.fields import ListField, StringField, ReferenceField, DateTimeField, IntField


def Nutritions(Document):
    timestamps = ListField(DateTimeField())
    carbs = IntField()
    fat = IntField()
    protein = IntField()
    calories = IntField()
    vitamineA = IntField()

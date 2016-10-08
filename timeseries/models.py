from mongoengine import Document
from mongoengine.base import BaseField
from mongoengine.fields import ListField, StringField, DateTimeField, DynamicField


def TimeSeries():
    type = StringField()
    timestamp = DateTimeField()
    value = DynamicField()

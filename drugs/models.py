from mongoengine import Document
from mongoengine.base.fields import BaseField
from mongoengine.fields import ListField, StringField, ReferenceField


class Drugs(Document):
    name = StringField(required=True, max_length=200)
    type = BaseField(choices=['vaccination,pill,juice,injection'])
    sideEffects = ListField()
    schedule = ListField()
    interactions = ListField(ReferenceField('self'))

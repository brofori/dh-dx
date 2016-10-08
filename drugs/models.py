from mongoengine import Document
from mongoengine.base.fields import BaseField
from mongoengine.fields import ListField, StringField, ReferenceField

TYPES = ['vaccination,pill,juice,injection']

class Drugs(Document):
    name = StringField(required=True, max_length=200)
    type = BaseField(choices=TYPES)
    sideEffects = ListField()
    schedule = ListField()
    interactions = ListField(ReferenceField('self'))

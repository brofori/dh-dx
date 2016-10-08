from mongoengine import Document
from mongoengine.base.fields import BaseField
from mongoengine.fields import  StringField, DateTimeField


class User(Document):
    email = StringField(required=True, unique=True)
    first_name = StringField(max_length=50)
    last_name = StringField(max_length=50)
    birthday = DateTimeField()
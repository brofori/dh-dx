from datetime import datetime
from django_mongoengine import Document, EmbeddedDocument, fields

TYPES = ['Injury',
         'Desease',
         'Vaccination']


class Illnesses(Document):
    type = fields.StringField()
    name = fields.StringField()
    user_id = fields.StringField()
    start_date = fields.DateTimeField()
    end_date = fields.DateTimeField()
    therapy = fields.DictField()


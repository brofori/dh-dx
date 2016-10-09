from datetime import datetime
from django_mongoengine import Document, EmbeddedDocument, fields

TYPES = ['Injury',
         'Desease']


class Illnesses(Document):
    type = fields.StringField()
    user_id = fields.StringField()
    start_date = fields.DateTimeField()
    end_date = fields.DateTimeField()
    therapy = fields.DictField()


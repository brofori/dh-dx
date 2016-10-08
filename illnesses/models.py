from datetime import datetime
from django_mongoengine import Document, EmbeddedDocument, fields


from drugs import models as drug_models


TYPES = ['Injury',
         'Desease']

class Illnesses(Document):
    type = fields.StringField(choices=TYPES)
    start_date = fields.DateTimeField(default=datetime.today())
    end_date = fields.DateTimeField()
    therapy = fields.DictField()
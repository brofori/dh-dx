from datetime import datetime
from mongoengine import Document
from mongoengine.base.fields import BaseField
from mongoengine.fields import  StringField, DateTimeField,ReferenceField
from drugs import models as drug_models


TYPES = ['Injury',
         'Desease']

class Illnesses(Document):
    type = StringField(choices=TYPES)
    start_date = DateTimeField(default=datetime.today())
    end_date = DateTimeField()
    therapy = ReferenceField(drug_models.Drugs)
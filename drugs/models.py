from django_mongoengine import Document, EmbeddedDocument, fields

TYPES = ['vaccination,pill,juice,injection']

class Drugs(Document):
    name = fields.StringField(required=True, max_length=200)
    type = fields.StringField()
    sideEffect = fields.ListField()
    schedule = fields.ListField()
    interactions = fields.ListField(fields.ReferenceField('self'))

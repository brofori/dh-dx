from django_mongoengine import Document, EmbeddedDocument, fields

def TimeSeries():
    type = fields.StringField()
    timestamp = fields.DateTimeField()
    value = fields.DictField()

from django_mongoengine import Document, EmbeddedDocument, fields

class User(Document):
    email = fields.StringField(required=True, unique=True)
    first_name = fields.StringField(max_length=50)
    last_name = fields.StringField(max_length=50)
    birthday = fields.DateTimeField()
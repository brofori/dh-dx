from django_mongoengine import Document, EmbeddedDocument, fields


def Nutritions(Document):
    timestamps = fields.ListField(fields.DateTimeField())
    carbs = fields.IntField()
    fat = fields.IntField()
    protein = fields.IntField()
    calories = fields.IntField()
    vitamineA = fields.IntField()

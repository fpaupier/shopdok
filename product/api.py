from flask import Flask
from flask_restful import Resource, Api

app  = Flask(__name__)

api = Api(app)

class Product(Resource):
    def get(self):
        return {
                'product': ['ice-cream',
                            'chocolate',
                            'fruit',
                            ]
                }
                
api.add_resource(Product, '/')
 
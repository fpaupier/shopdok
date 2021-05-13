from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api

app  = Flask(__name__)
CORS(app)

api = Api(app)

class Product(Resource):
    def get(self):
        return {
                'products': ['ice-cream',
                            'chocolate',
                            'fruit',
                            ]
                }
                
api.add_resource(Product, '/')
 
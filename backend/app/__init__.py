from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)
app.config.from_object('app.config.Config')

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import routes, models

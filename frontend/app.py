from flask import *
import hashlib
from pymongo import *
import string 
import datetime
import re
from flask_cors import *

app = Flask(__name__)
cors = CORS(app)


@app.errorhandler(Exception)
def page_not_found(e):
	return render_template('error.html',errorValue=404)

@app.route('/')
@cross_origin()
def start():
	return render_template('index.html',val = "False")

@app.route('/<var>')
def index(var):
	return render_template('index.html',val = var)
@app.route('/signup')
def signup():
	return render_template('signup.html')

@app.route('/login/<var>')
def login(var):
	return render_template('login.html' ,val = var)

@app.route('/login')
def loginstart():
	return render_template('login.html' ,val = "False")



@app.route('/upload')
def upload():
	return render_template('upload.html')

@app.route('/cat')
def cat():
	return render_template('cat.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0',port=80,debug=True)
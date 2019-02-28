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
	try:
		int(var)
		return render_template('index.html',val = var)
	except Exception as e:
		return render_template('error.html',errorValue=404)

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

@app.route('/addcat')
def addcat():
	return render_template('addcat.html')

@app.route('/rmuser')
def rmusr():
	return render_template('rmuser.html')

@app.route('/rmcat')
def rmcat():
	return render_template('rmcat.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0',port=80,debug=True)
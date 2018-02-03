from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
import datetime

app = Flask(__name__)
bcrypt = Bcrypt(app)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z\._-]+\.[a-zA-Z]*$')
app.secret_key = 'LoginAndRegister'
mysql = MySQLConnector(app, 'LoginReg')

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template("index.html")

@app.route('/create_user', methods=['POST'])
def create():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    confirm_pass = request.form['confirm_pass']

    if len(first_name) < 1:
        flash('First name cannot be empty')
        return redirect('/')
    elif not str.isalpha(str(first_name)):
        flash('First name should only contain letters')
        return redirect('/')
    elif not len(first_name) >= 2:
        flash('First name should contain at least two characters')
        return redirect('/')

    if len(last_name) < 1:
        flash('Last name cannot be empty')
        return redirect('/')
    elif not str.isalpha(str(last_name)):
        flash('Last name should only contain letters')
        return redirect('/')
    elif not len(last_name) >= 2:
        flash('Last name should contain at least two characters')
        return redirect('/')

    if len(email) < 1:
        flash('Email cannot be empty')
        return redirect('/')
    elif not EMAIL_REGEX.match(email):
        flash('Please enter a valid email')
        return redirect('/')

    if len(password) < 1:
        flash('Password cannot be empty')
        return redirect('/')
    elif not len(password) >= 8:
        flash('Password must be at least 8 characters')
        return redirect('/')

    if len(confirm_pass) < 1:
        flash('Confirm password cannot be empty')
        return redirect('/')

    if not password == confirm_pass:
        flash('Passwords do not match')
        return redirect('/')
    else:
        successful = "Thank you for registering " + first_name + " " + last_name + "!"
        pw_hash = bcrypt.generate_password_hash(password)
        query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at, updated_at) VALUES (:first_name, :last_name, :email, :pw_hash, NOW(), NOW())"
        data = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'pw_hash': pw_hash,
            'created_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now())),
            'updated_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now()))
        }
        mysql.query_db(query, data)
        return render_template('success.html', registration=successful)
    return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    email_login = request.form['email_log']
    password_login = request.form['password_log']
    print "Made it to here p1"

    if len(email_login) < 1:
        flash('Email cannot be empty')
        return redirect('/')
    elif len(password_login) < 1:
        flash('Password cannot be empty')
        return redirect('/')

    query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    data = {
        'email': email_login
    }
    user = mysql.query_db(query, data)
    session['user'] = user[0]['id']
    print "Made it to here pt2"
    if bcrypt.check_password_hash(user[0]['pw_hash'], password_login):
        successful = "Welcome back user " + email_login
        return render_template('success.html', registration=successful)
    else:
        flash('Email address or password is incorrect')
        return redirect('/')

app.run(debug=True)

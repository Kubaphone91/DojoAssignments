from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
import re
import datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = 'AllMyFriends'
mysql = MySQLConnector(app, 'FullFriends')

@app.route('/')
def index():
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template("index.html", users=users)

@app.route('/friends', methods=['POST'])
def create():
    if len(request.form['first_name']) < 1 or len(request.form['last_name']) < 1 or len(request.form['email']) < 1:
        flash("Please fill out all fields")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email, please try again")
    else:
        flash("The email address you entered (" + request.form['email'] + ") is valid. Thank you.")
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW()) "
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'created_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now())),
            'updated_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now()))
        }
        mysql.query_db(query, data)
        query = 'SELECT * FROM users'
        users = mysql.query_db(query)
        return redirect('/')
    return redirect('/')

@app.route('/friends/<id>/edit', methods=['GET'])
def edit(id):
    query = 'SELECT * FROM users WHERE id = :id'
    data = {
            'id': id
            }
    users = mysql.query_db(query, data)
    return render_template("edit.html", users=users)

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    query = "UPDATE users SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
    data = {
            'id': request.form['id'],
            'first_name': request.form['first_name'],
            'last_name':  request.form['last_name'],
            'email': request.form['email'],
           }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
    query = "DELETE FROM users WHERE id = :id"
    data = {'id': request.form['delete']}
    mysql.query_db(query, data)
    flash("Email address successfully deleted")
    return redirect('/')

@app.route('/goback', methods=['POST'])
def reset():
    return redirect("/")

app.run(debug=True)

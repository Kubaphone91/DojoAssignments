from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
import re
import datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
mysql = MySQLConnector(app, 'emailverification')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def check():
    if len(request.form['email']) < 1:
        flash("Email cannot be left blank")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address")
    else:
        flash("The email address you entered (" + request.form['email'] + ") is valid. Thank you!")
        query = "INSERT INTO emails (name, created_at, updated_at) VALUES (:name, NOW(), NOW())"
        data = {
                'name': request.form['email'],
                'created_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now())),
                'updated_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now()))
                }
        mysql.query_db(query,data)
        return redirect('/success')
    return redirect('/')

@app.route('/success')
def success():
    query = "SELECT *FROM emails"
    emails = mysql.query_db(query)
    return render_template('success.html', emails=emails)

@app.route('/delete/<email_id>', methods=['POST', 'GET'])
def delete(email_id):
    query = "DELETE FROM emails WHERE id = :id"
    data = {'id': request.form['delete']}
    mysql.query_db(query, data)
    flash("Email address successfully deleted")
    return redirect('/success')

@app.route('/goback', methods=['POST'])
def reset():
    return redirect("/")

app.run(debug=True)

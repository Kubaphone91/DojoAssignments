from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
import datetime

app = Flask(__name__)
bcrypt = Bcrypt(app)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z\._-]+\.[a-zA-Z]*$')
app.secret_key = 'TheWallSecret'
mysql = MySQLConnector(app, 'log_wall')

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')

@app.route('/create_user', methods=['POST'])
def create():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    confirm_pass = request.form['confirm_pass']

    if (len(first_name) or len(last_name) or len(email) or len(password) or len(confirm_pass)) < 1:
        flash('Input field has been left blank, please fill all of them in')
        return redirect('/')

    if not (str.isalpha(str(first_name)) or str.isalpha(str(last_name))):
        flash('First and last name can only contain letters')
        return redirect('/')

    if not (len(first_name) or len(last_name)) >= 2:
        flash('First and last name must contain at least two characters each')
        return redirect('/')

    if not EMAIL_REGEX.match(email):
        flash('Invalid email, please try again')
        return redirect('/')

    if not len(password) >= 8:
        flash('Password must contain at least 8 characters')
        return redirect('/')

    if not password == confirm_pass:
        flash('Passwords do not match')
        return redirect('/')
    else:
        successful = "Thank you for registering " + first_name + " " + last_name + "!"
        pw_hash = bcrypt.generate_password_hash(password)
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': pw_hash,
            'created_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now())),
            'updated_at': ('{:%b %d, %Y %I:%M:%S %p}'.format(datetime.datetime.now()))
        }
        mysql.query_db(query, data)
        return render_template('success.html', registration=successful)

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email_login']
    password = request.form['password_login']

    if (len(email) or len(password)) < 1:
        flash('Fields cannot be left blank')
        return redirect('/')
    elif not EMAIL_REGEX.match(email):
        flash('Invalid email')
        return redirect('/')
    else:
        query = "SELECT * FROM users WHERE email = :email LIMIT 1"
        data = {
            'email': email
        }
        user = mysql.query_db(query, data)

        if bcrypt.check_password_hash(user[0]['password'], password):
            session['user_id'] = user[0]['id']
            session['first_name'] = user[0]['first_name']
            session['last_name'] = user[0]['last_name']
            session['logged_in'] = True
            return redirect('/wall')
        else:
            flash('Email/password does not match')
            return redirect('/')

@app.route('/wall')
def dojo_wall():
    query_messages = "SELECT messages.id, messages.message, DATE_FORMAT(messages.created_at, '%b %e, %Y') AS date, CONCAT(users.first_name, ' ', users.last_name) AS name FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.created_at DESC"
    messages = mysql.query_db(query_messges)
    query_comments = "SELECT comments.message_id, comments.id, comments.comment, DATE_FORMAT(comments.created_at, '%b %e, %Y') AS date, CONCAT(users.first_name, ' ', users.last_name) AS name FROM comments JOIN messages ON messages.id = comments.message_id JOIN users ON comments.user_id = users.id"
    comments = mysql.query_db(query_comments)
    return render_template('wall.html', messages=messages, comments=comments)

@app.route('/post_message', methods=['POST'])
def postMessage():
    message = request.form['wall_post']
    if len(message) < 1:
        flash('Message cannot be blank')
        return redirect('/wall')
    else:
        query = "INSERT INTO messsages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"
        data = {
            'message': message,
            'user_id': seesion['user_id']
        }
        mysql.query_db(query, data)
        return redirect('/wall')

@app.route('/post_comment', methods=['POST'])
def postComment():
    comment = request.form['comment']
    message_id = request.form['message_id']
    if len(comment) < 1:
        flash('Comment cannot be blank')
        return redirect('/wall')
    else:
        query = "INSERT INTO comments (user_id, message_id, comment, created_at, updated_at) VALUES (:user_id, :message_id, :comment, NOW(), NOW())"
        data = {
            'user_id': session['user_id'],
            'message_id': message_id,
            'comment': comment
        }
        mysql.query_db(query, data)
        return redirect('/wall')

@app.route('/delete_message', methods=['POST'])
def deleteMessage():
    message_id = request.form['message_id']
    query = "DELETE FROM messages WHERE id = :id"
    data = {
        'id': message_id
    }
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/delete_comment', methods=['POST'])
def deleteComment():
    comment_id = request.form['comment_id']
    query = "DELETE FROM comments WHERE id = :id"
    data = {
        'id': comment_id
    }
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/logout')
def logOut():
    session['first_name'] = ''
    session['last_name'] = ''
    session['email'] = ''
    session['password'] = ''
    session['confirm_pass'] = ''
    session['user_id'] = ''
    session['logged_in'] = False
    return redirect('/')

app.run(debug=True)

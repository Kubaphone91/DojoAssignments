from flask import Flask, render_template, redirect, request, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def submission():
    if len(request.form['first_name']) < 1:
        flash("First name cannot be left blank")
        return render_template('index.html')
    elif not str.isalpha(str(request.form['first_name'])):
        flash("First name cannot contain numbers")
        return render_template('index.html')

    if len(request.form['last_name']) < 1:
        flash("Last name cannot be left blank")
        return render_template('index.html')
    elif not str.isalpha(str(request.form['last_name'])):
        flash("Last name cannot contain numbers")
        return render_template('index.html')

    if len(request.form['email']) < 1:
        flash("Email cannot be left blank")
        return render_template('index.html')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address")
        return render_template('index.html')

    if len(request.form['password']) < 1:
        flash("Password needs to be chosen")
        return render_template('index.html')
    elif not len(request.form['password'])  >= 8:
        flash("Password needs to be greater than 8 characters")
        return render_template('index.html')

    if len(request.form['confirm_password']) < 1:
        flash("Password confirmation needs to be filled in")
        return render_template('index.html')
    if not (request.form['password'] == request.form['confirm_password']):
        flash("Passwords do not match")
        return render_template('index.html')

    else:
        flash("You have successfully registered your account!")
        return redirect('/')

app.run(debug=True)

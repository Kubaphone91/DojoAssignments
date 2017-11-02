from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key = "NumbersAreFun"

def randNum():
    session['number'] = int(random.randrange(0,101))
    print session['number']

@app.route('/')
def index():
    randNum()
    return render_template("index.html")

@app.route('/guess', methods=['POST'])
def guessNum():
    guess = int(request.form['guess'])
    if guess < session['number']:
        print "Too Low"
        return render_template("toolow.html")
    elif guess > session['number']:
        print "Too High"
        return render_template("toohigh.html")
    else:
        print "Winning number chosen"
        return render_template("youwin.html")

app.run(debug=True)

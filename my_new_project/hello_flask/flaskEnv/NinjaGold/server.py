from flask import Flask, render_template, redirect, request, session
import random
from datetime import datetime
app = Flask(__name__)
app.secret_key = "NinjaGoldWinning"

def freshGame():
    if ('log' and 'gold') in session:
        return
    else:
        session['gold'] = 0
        session['log'] = ''
        return


@app.route('/')
def index():
    freshGame()
    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def processMoney():
    if request.form['value'] == 'farm':
        gold = int(random.randrange(10,21))
        session['gold'] += gold
        session['log'] += 'Earned ' + str(gold) + ' gold(s) from the farm! (' + (str(datetime.now())) + '). \n'
        return redirect('/')
    elif request.form['value'] == 'cave':
        gold = int(random.randrange(5,11))
        session['gold'] += gold
        session['log'] += 'Earned ' + str(gold) + ' gold(s) from the cave! (' + (str(datetime.now())) + ').' + '\n'
        return redirect('/')
    elif request.form['value'] == 'house':
        gold = int(random.randrange(2,6))
        session['gold'] += gold
        session['log'] += 'Earned ' + str(gold) + ' gold(s) from the house! (' + (str(datetime.now())) + ').' + '\n'
        return redirect('/')
    elif request.form['value'] == 'casino':
        gold = int(random.randrange(-50,51))
        session['gold'] += gold
        if gold > 0:
            session['log'] += 'Earned ' + str(gold) + ' gold(s) from the casino! (' + (str(datetime.now())) + ').' + '\n'
        else:
            gold = abs(gold)
            session['log'] += 'Lost ' + str(gold) + ' gold(s) from the casino... Better luck next time. (' + (str(datetime.now())) + ').' + '\n'
        return redirect('/')
    elif request.form['value'] == 'reset':
        if ('gold' and 'log') in session:
            session.pop('gold')
            session.pop('log')
            return redirect('/')
        else:
            return redirect('/')

app.run(debug=True)

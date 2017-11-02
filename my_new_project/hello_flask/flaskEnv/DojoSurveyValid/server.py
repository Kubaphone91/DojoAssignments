from flask import Flask, render_template, redirect, request, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecret'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results', methods=['POST'])
def results():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    if len(name) < 1:
        flash("Name cannot be left blank")
        return redirect('/')
    if len(comment) < 1:
        flash("Comment box cannot be left empty")
        return redirect('/')
    elif len(comment) > 120:
        flash("Comment box cannot exceed 120 characters")
        return redirect('/')
    else:
        return render_template('results.html', name=name, location=location, language=language, comment=comment)

app.run(debug=True)

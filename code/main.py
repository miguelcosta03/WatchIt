from flask import Flask, render_template, request, redirect, url_for
from database import Database
import os, re

SERIES_BACKGROUND_FOLDER = os.path.join('static', 'images', 'series_background')

app = Flask(__name__)
app.config['SERIES_BACKGROUND_FOLDER'] = SERIES_BACKGROUND_FOLDER

mainPageTemplate = 'mainPage.html'
homeTemplate = 'home.html'
loginTemplate = 'login.html'
signUpTemplate = 'signUp.html'

database = Database(f'SQL SERVER', 'MYSERPC\MSSQLSERVER01;', 'WatchItDB')

@app.route("/login", methods=['GET', 'POST'])
def login():
    invalidEmail = False
    email_error = None
    invalidPassword = False
    password_error = None
    invalidCredentials = False
    invalidCredentialsText = None

    if request.method == 'POST':
        if request.form.get('login') == 'Login':
            email_address = request.form['email_address']
            password = request.form['password']
            email_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
            
            if len(email_address) >= 1:
                if re.fullmatch(email_regex, email_address):
                    if len(password) > 1:
                        invalidPassword = False
                        correctLogin = database.loginUser(email_address, password)
                        if correctLogin:
                            invalidCredentials = False
                            return redirect(url_for('home'))
                        else:
                            invalidCredentials = True
                            invalidCredentialsText = '* Email ou Palavra-Passe Inválidos.'
                    else:
                        invalidPassword = True
                        password_error = '* Por favor insira a sua password.'
                else:
                    invalidEmail = True
                    email_error = '* Email Inválido.'
            else:
                invalidEmail = True
                email_error = "* Por favor insira o seu email."
    return render_template(loginTemplate, invalidEmail=invalidEmail, email_error=email_error, invalidPassword=invalidPassword, password_error=password_error,
                           invalidCredentials=invalidCredentials, invalidCredentialsText=invalidCredentialsText)

@app.route("/registarConta", methods=['GET', 'POST'])
def signUp():
    if request.method == 'POST':
        if request.form.get('signUp') == 'Registar':
            email_address = request.form['email_address']
            username = request.form['username']
            password = request.form['password']
            database.createNewUser(email_address, username, password)
            return redirect(url_for('home'))
    return render_template(signUpTemplate)

@app.route("/home", methods=['GET', 'POST'])
def home():
    return render_template(homeTemplate)
@app.route("/", methods=['GET', 'POST'])
def mainPage():
    if request.method == 'POST':
        if request.form.get('loginButton') == 'Login':
            return redirect(url_for('login'))
        
        if request.form.get('signUpButton') == 'Registar':
            return redirect(url_for('signUp'))
            
    s1_image = os.path.join(app.config['SERIES_BACKGROUND_FOLDER'], 'pb.jpg')
    s2_image = os.path.join(app.config['SERIES_BACKGROUND_FOLDER'], 'lcp.jfif')
    
    return render_template(mainPageTemplate, s1=s1_image, s2=s2_image)


if __name__ == "__main__":
    app.run(debug=True)

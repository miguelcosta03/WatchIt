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
                    invalidEmail = False
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
    invalid_email = False
    email_error = None
    invalid_username = False
    username_error = None
    invalid_password = False
    password_error = None
    invalid_confirm_password = False
    confirm_password_error = None
    if request.method == 'POST':
        if request.form.get('signUp') == 'Registar':
            email_address = request.form['email_address']
            username = request.form['username']
            password = request.form['password']
            confirm_password = request.form['confirm_password']
            email_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
            
            if len(email_address) >= 1:
                if re.fullmatch(email_regex, email_address):
                    invalid_email = False
                    if len(username) >= 5:
                        invalid_username = False
                        if len(password) >= 1:
                            invalid_password = False
                            if len(confirm_password) >= 1:
                                invalid_confirm_password = False
                                if password == confirm_password:
                                    invalid_password = False
                                    invalid_confirm_password = False
                                    userExists = database.checkIfUserExistsByEmail(email_address)
                                    if not userExists:
                                        database.createNewUser(email_address, username, password)
                                    else:
                                        invalid_email = True
                                        email_error = '* Este Email já está associado a uma conta.'

                                else:
                                    invalid_password = True
                                    invalid_confirm_password = True
                                    password_error = '* As palavras-passe inseridas não correspondem.'
                                    confirm_password_error = '* As palavras-passe inseridas não correspondem.'
                            else:
                                invalid_confirm_password = True
                                confirm_password_error = '* Por favor preencha o campo de Confirmar Palavra-Passe.'
                        else:
                            invalid_password = True
                            password_error = '* Por favor preencha o campo da Palavra-Passe.'
                    else:
                        invalid_username = True
                        username_error = '* O Nome de Utilizador precisa de ter no mínimo 5 letras.'
                else:
                    invalid_email = True
                    email_error = '* Email Inválido.'
            else:
                invalid_email = True
                email_error = '* Por favor insira o seu email.'
                
    return render_template(signUpTemplate, invalid_email=invalid_email, email_error=email_error, invalid_username=invalid_username, username_error=username_error,
                           invalid_password=invalid_password, password_error=password_error, invalid_confirm_password=invalid_confirm_password, confirm_password_error=confirm_password_error)

@app.route("/", methods=['GET', 'POST'])
def mainPage():
    s1_value = 'Peaky Blinders'
    s2_value = 'La Casa de Papel'
    if request.method == 'POST':
        if request.form.get('loginButton') == 'Login':
            return redirect(url_for('login'))
        
        if request.form.get('signUpButton') == 'Registar':
            return redirect(url_for('signUp'))
        
        if request.form.get('s1Button') == s1_value:
            print('Peakyyy!!!')

        if request.form.get('s2Button') == s2_value:
            print('La Casa de Papel')
            
    s1_image = os.path.join(app.config['SERIES_BACKGROUND_FOLDER'], 'pb.jpg')
    s2_image = os.path.join(app.config['SERIES_BACKGROUND_FOLDER'], 'lcp.jfif')
    
    return render_template(mainPageTemplate, s1=s1_image, s2=s2_image, s1_value=s1_value, s2_value=s2_value)


if __name__ == "__main__":
    app.run(debug=True)

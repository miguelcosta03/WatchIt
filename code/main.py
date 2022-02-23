from wsgiref.util import request_uri
from attr import set_run_validators
from flask import Flask, render_template, request, redirect, request_started, url_for
from database import Database
import os, re

SERIES_THUMBNAIL_FOLDER = os.path.join('static', 'images', 'series_background', 'thumbnails')

app = Flask(__name__)
app.config['SERIES_THUMBNAIL_FOLDER'] = SERIES_THUMBNAIL_FOLDER


mainPageTemplate = 'mainPage.html'
homeTemplate = 'home.html'
loginTemplate = 'login.html'
signUpTemplate = 'signUp.html'
serieTemplate = 'serie.html'

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
            database.updateCurrentSerieURL('peakyblinders', 'Peaky Blinders')
            return redirect(url_for("watchSerie"))


        if request.form.get('s2Button') == s2_value:
            database.updateCurrentSerieURL('lacasadepapel', 'La Casa de Papel')
            return redirect(url_for("watchSerie"))
            
    s1_image = os.path.join(SERIES_THUMBNAIL_FOLDER, 'peaky_blinders.jpg')
    s2_image = os.path.join(SERIES_THUMBNAIL_FOLDER, 'la_casa_de_papel.jfif')
    
    return render_template(mainPageTemplate, s1=s1_image, s2=s2_image, s1_value=s1_value, s2_value=s2_value)

@app.route(f"/{database.getCurrentSerieURL()}", methods=['POST', 'GET'])
def watchSerie():
    serie_title = f'WatchIt - {database.getCurrentSerieName()}'
    serie_image_background = r'{}'.format(database.getSerieBackgroundImage(database.getCurrentSerieName()))
    serie_cover_image = r'{}'.format(database.getSerieCoverImage(database.getCurrentSerieName()))
    serie_name = f'{database.getSerieName(database.getCurrentSerieName())}'
    serie_release_year = f'{database.getSerieReleaseYear(database.getCurrentSerieName())}'
    serie_duration = f'{database.getSerieDuration(database.getCurrentSerieName())}'
    serie_total_seasons_number = f'{database.getSerieTotalSeasonsNumber(database.getCurrentSerieName())}'
    serie_star_classification = f'{database.getSerieStarClassification(database.getCurrentSerieName())}'
    serie_description = f'{database.getSerieDescription(database.getCurrentSerieName())}'
    
    season_number = 1
    episode_number = 1

    if request.method == 'POST':
        if request.form.get('season1Button') == 'season1Button':
            season_number = 1

        elif request.form.get('season2Button') == 'season2Button':
            season_number = 2
        
        elif request.form.get('season3Button') == 'season3Button':
            season_number = 3
        
        elif request.form.get('season4Button') == 'season4Button':
            season_number = 4
        
        elif request.form.get('season5Button') == 'season5Button':
            season_number = 5

    if request.method == 'POST':
        if request.form.get('playEpisode1Button') == 'playEpisode1Button':
            episode_number = 1

        elif request.form.get('playEpisode2Button') == 'playEpisode2Button':
            episode_number = 2
        
        elif request.form.get('playEpisode3Button') == 'playEpisode3Button':
            episode_number = 3
        
        elif request.form.get('playEpisode4Button') == 'playEpisode4Button':
            episode_number = 4
        
        elif request.form.get('playEpisode5Button') == 'playEpisode5Button':
            episode_number = 5
        
        elif request.form.get('playEpisode6Button') == 'playEpisode6Button':
            episode_number = 6

    episode_1_cover_image = f'{database.getEpisodeCoverImage(database.getCurrentSerieName(), season_number, 1)}'
    episode_2_cover_image = f'{database.getEpisodeCoverImage(database.getCurrentSerieName(), season_number, 2)}'
    episode_3_cover_image = f'{database.getEpisodeCoverImage(database.getCurrentSerieName(), season_number, 3)}'
    episode_4_cover_image = f'{database.getEpisodeCoverImage(database.getCurrentSerieName(), season_number, 4)}'
    episode_5_cover_image = f'{database.getEpisodeCoverImage(database.getCurrentSerieName(), season_number, 5)}'
    episode_6_cover_image = f'{database.getEpisodeCoverImage(database.getCurrentSerieName(), season_number, 6)}'

    
    episode_video = f'{database.getEpisodeVideo(database.getCurrentSerieName(), season_number, episode_number)}'
    return render_template(serieTemplate, serie_title=serie_title, serie_image_background=serie_image_background, serie_cover_image=serie_cover_image,
                           serie_name=serie_name, serie_release_year=serie_release_year, serie_duration=serie_duration, serie_total_seasons_number=serie_total_seasons_number,
                           serie_star_classification=serie_star_classification, serie_description=serie_description, episode_1_cover_image=episode_1_cover_image,
                           episode_2_cover_image=episode_2_cover_image, episode_3_cover_image=episode_3_cover_image,
                           episode_4_cover_image=episode_4_cover_image, episode_5_cover_image=episode_5_cover_image,
                           episode_6_cover_image=episode_6_cover_image, episode_video=episode_video)


if __name__ == "__main__":
    app.run(debug=True)
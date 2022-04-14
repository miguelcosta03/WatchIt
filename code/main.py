from flask import Flask, render_template, request, redirect, url_for
from database import Database
from contacts import Contacts
from account_operations import AccountOperations

app = Flask(__name__)


mainPageTemplate = 'mainPage.html'
loginTemplate = 'login.html'
signUpTemplate = 'signUp.html'
serieTemplate = 'serie.html'
moviesTemplate = 'movies.html'
seriesTemplate = 'series.html'
editProfileTemplate = 'editProfile.html'
insertVericationCodeTemplate = 'insertVerificationCode.html'
changePasswordTemplate = 'changePassword.html'
errorPageTemplate = 'errorPage.html'

database = Database('SQL Server', '127.0.0.1', 1433, 'WatchItDB', 'su', '123456')

isLogged = False
email_address = ""

@app.route("/login", methods=['GET', 'POST'])
def login():
    global isLogged
    global email_address
    invalidEmail = False
    invalidCredentialsText = ''
    try:
        if request.method == 'POST':
            if request.form.get('login') == 'Login':
                email_address = request.form['email_address']
                password = request.form['password']
                correctLogin = database.loginUser(email_address, password)
                if correctLogin:

                    isLogged = True
                    return redirect(url_for('mainPage'))
                else:
                    invalidCredentialsText = '* Email ou Palavra-Passe Inválidos.'
    except IndexError:
        return render_template(errorPageTemplate)
                    
    return render_template(loginTemplate, invalidEmail=invalidEmail, invalidCredentialsText=invalidCredentialsText)

@app.route("/registarConta", methods=['GET', 'POST'])
def signUp():
    invalidCredentialsText = ''
    if request.method == 'POST':
        if request.form.get('signUp') == "Registar":
            email = request.form['email_address']
            username = request.form['username']
            password = request.form['password']
            conf_password = request.form['confirmPassword']
            if password == conf_password:
                invalidCredentialsText = ''
                database.createNewUser(email, username, password)
                return redirect(url_for('mainPage'))
            else:
                invalidCredentialsText = '* As passwords não correspondem.'
    return render_template(signUpTemplate, invalidCredentialsText=invalidCredentialsText)

@app.route("/", methods=['GET', 'POST'])
def mainPage():
    s1_value = 'Peaky Blinders'
    s2_value = 'La Casa de Papel'
    s3_value = 'Euphoria'
    ts_ids = database.getTrendingSeriesID()
    ts1_name = database.getSerieName(ts_ids[0])
    ts2_name = database.getSerieName(ts_ids[1])
    ts3_name = database.getSerieName(ts_ids[2])
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

        if request.form.get('s3Button') == s3_value:
            database.updateCurrentSerieURL('euphoria', 'Euphoria')
            return redirect(url_for("watchSerie"))
        
    ts1_bg_img = database.getSerieBackgroundImage(database.getSerieID(ts1_name))
    ts2_bg_img = database.getSerieBackgroundImage(database.getSerieID(ts2_name))
    ts3_bg_img = database.getSerieBackgroundImage(database.getSerieID(ts3_name))

    s1_image = database.getSerieCoverImage(database.getSerieID(s1_value))
    s2_image = database.getSerieCoverImage(database.getSerieID(s2_value))
    s3_image = database.getSerieCoverImage(database.getSerieID(s3_value))
    
    return render_template(mainPageTemplate, isLogged=isLogged, s1_image=s1_image, s2_image=s2_image, s3_image=s3_image,s1_value=s1_value, s2_value=s2_value,
                           s3_value=s3_value, ts1_bg_img=ts1_bg_img, ts2_bg_img=ts2_bg_img, ts3_bg_img=ts3_bg_img,
                           ts1_name=ts1_name, ts2_name=ts2_name, ts3_name=ts3_name)

@app.route('/filmes')
def movies():
    return render_template(moviesTemplate)

@app.route('/series')
def series():
    s1_image = database.getSerieCoverImage(1)
    s2_image = database.getSerieCoverImage(2)
    s3_image = database.getSerieCoverImage(3)
    return render_template(seriesTemplate, s1_image=s1_image, s2_image=s2_image, s3_image=s3_image)

@app.route('/editarPerfil')
def editProfile():
    global email_address
    username = str(database.getUsername(database.getUserID(email_address)))
    return render_template(editProfileTemplate, username=username, email_address=email_address)

@app.route('/inserirCodigodeVerificacao', methods=['GET', 'POST'])
def insertVericationCode():
    global email_address

    invalidVerificationCode = False
    genVerCode = AccountOperations.generateNewVerificationCode()
    verCode = ""
    sendEmailPVC = database.checkSendingEmailRecuperationCode(database.getVerificationCodeRegisteredDate(database.getUserID(email_address)))
    if sendEmailPVC:
        contact = Contacts(email_address)
        contact.send_email(genVerCode)
        database.updatePasswordVerificationCode(database.getUserID(email_address), genVerCode)
        verCode = list(str(database.getPasswordVerificationCode(database.getUserID(email_address))))
    else:
        verCode = list(str(database.getPasswordVerificationCode(database.getUserID(email_address))))

    print(f'CODIGO: {verCode}')
    if request.method == 'POST':
        if request.form.get('submitButton') == 'Verificar':
            firstDigit = int(request.form['first_input'])
            secondDigit = int(request.form['second_input'])
            thirdDigit = int(request.form['third_input'])
            fourthDigit = int(request.form['fourth_input'])

            if firstDigit == int(verCode[0]) and secondDigit == int(verCode[1]) and thirdDigit == int(verCode[2]) and fourthDigit == int(verCode[3]):
                invalidVerificationCode = False
                return redirect(url_for('changePassword'))
            
            else:
                invalidVerificationCode = True
    return render_template(insertVericationCodeTemplate, invalidVerificationCode=invalidVerificationCode)

@app.route('/alterarPalavraPasse', methods=['GET', 'POST'])
def changePassword():
    global email_address
    invalidCredentials = False
    invalidCredentialsText = ''
    if request.method == 'POST':
        if request.form.get('confirmNewPasswordButton') == 'alterarPalavraPasse':
            password = request.form['password']
            conf_password = request.form['confirmPassword']
            if len(password) > 0 and password == conf_password:
                invalidCredentials = False
                invalidCredentialsText = ''
                database.updateUserPassword(database.getUserID(email_address), password)
            else:
                invalidCredentials = True
                invalidCredentialsText = '* Por favor insira uma password.'
    return render_template(changePasswordTemplate, invalidCredentials=invalidCredentials, invalidCredentialsText=invalidCredentialsText)

@app.route(f"/{database.getCurrentSerieURL()}", methods=['GET', 'POST'])
def watchSerie():
    serie_title = f'WatchIt - {database.getCurrentSerieName()}'
    serie_image_background = r'{}'.format(database.getSerieBackgroundImage(database.getSerieID(database.getCurrentSerieName())))
    serie_cover_image = r'{}'.format(database.getSerieCoverImage(database.getSerieID(database.getCurrentSerieName())))
    serie_name = f'{database.getSerieName(database.getSerieID(database.getCurrentSerieName()))}'
    serie_release_year = f'{database.getSerieReleaseYear(database.getSerieID(database.getCurrentSerieName()))}'
    serie_duration = f'{database.getSerieDuration(database.getSerieID(database.getCurrentSerieName()))}'
    serie_total_seasons_number = f'{database.getSerieTotalSeasonsNumber(database.getSerieID(database.getCurrentSerieName()))}'
    serie_star_classification = f'{database.getSerieStarClassification(database.getSerieID(database.getCurrentSerieName()))}'
    serie_description = f'{database.getSerieDescription(database.getSerieID(database.getCurrentSerieName()))}'
    
    season_number = 1
    episode_number = 1

    if request.method == 'POST':
        match request.form.get('seasonButton'):
            case 'season1Button':
                season_number = 1
            
            case 'season2Button':
                season_number = 2
            
            case 'season3Button':
                season_number = 3
            
            case 'season4Button':
                season_number = 4
            
            case 'season5Button':
                season_number = 5

    if request.method == 'POST':
        match request.form.get('playEpisodeButton'):
            case 'playEpisode1Button':
                episode_number = 1
            
            case 'playEpisode2Button':
                episode_number = 2
            
            case 'playEpisode3Button':
                episode_number = 3
            
            case 'playEpisode4Button':
                episode_number = 4
            
            case 'playEpisode5Button':
                episode_number = 5
            
            case 'playEpisode6Button':
                episode_number = 6
            
            case 'playEpisode7Button':
                episode_number = 7
            
            case 'playEpisode8Button':
                episode_number = 8
            
            case 'playEpisode9Button':
                episode_number = 9
            
            case 'playEpisode10Button':
                episode_number = 10
            
            case 'playEpisode11Button':
                episode_number = 11
            
            case 'playEpisode12Button':
                episode_number = 12
            
            case 'playEpisode13Button':
                episode_number = 13
            
            case 'playEpisode14Button':
                episode_number = 14
            
            case 'playEpisode15Button':
                episode_number = 15

            case 'playEpisode16Button':
                episode_number = 16

    episode_1_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 1)}'
    episode_2_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 2)}'
    episode_3_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 3)}'
    episode_4_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 4)}'
    episode_5_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 5)}'
    episode_6_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 6)}'
    episode_7_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 7)}'
    episode_8_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 8)}'
    episode_9_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 9)}'
    episode_10_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 10)}'
    episode_11_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 11)}'
    episode_12_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 12)}'
    episode_13_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 13)}'
    episode_14_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 14)}'
    episode_15_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 15)}'
    episode_16_cover_image = f'{database.getEpisodeCoverImage(database.getSerieID(database.getCurrentSerieName()), season_number, 16)}'

    episode_video = f'{database.getEpisodeVideo(database.getSerieID(database.getCurrentSerieName()), season_number, episode_number)}'


    episode_limit = int(database.getSerieTotalSeasonEpisodes(database.getSerieID(database.getCurrentSerieName()), season_number))
    total_num_seasons = int(database.getSerieTotalSeasonsNumber(database.getSerieID(database.getCurrentSerieName())))

    ep1_available = True
    ep2_available = True
    ep3_available = True
    ep4_available = True
    ep5_available = True
    ep6_available = True
    ep7_available = True
    ep8_available = True
    ep9_available = True
    ep10_available = True
    ep11_available = True
    ep12_available = True
    ep13_available = True
    ep14_available = True
    ep15_available = True
    ep16_available = True


    match episode_limit:
        case 1:
            ep2_available = False
            ep3_available = False
            ep4_available = False
            ep4_available = False
            ep5_available = False
            ep6_available = False
            ep7_available = False
            ep8_available = False
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 2:
            ep3_available = False
            ep4_available = False
            ep5_available = False
            ep6_available = False
            ep7_available = False
            ep8_available = False
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 3:
            ep4_available = False
            ep5_available = False
            ep6_available = False
            ep7_available = False
            ep8_available = False
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 4:
            ep5_available = False
            ep6_available = False
            ep7_available = False
            ep8_available = False
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 5:
            ep6_available = False
            ep7_available = False
            ep8_available = False
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 6:
            ep7_available = False
            ep8_available = False
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 7:
            ep8_available = False
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 8:
            ep9_available = False
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 9:
            ep10_available = False
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 10:
            ep11_available = False
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 11:
            ep12_available = False
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 12:
            ep13_available = False
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 13:
            ep14_available = False
            ep15_available = False
            ep16_available = False
        
        case 14:
            ep15_available = False
            ep16_available = False
        
        case 15:
            ep16_available = False
        
        case 16:
            pass
    
    s1_available = True
    s2_available = True
    s3_available = True
    s4_available = True
    s5_available = True

    match total_num_seasons:
        case 1:
            s2_available = False
            s3_available = False
            s4_available = False
            s5_available = False
        
        case 2:
            s3_available = False
            s4_available = False
            s5_available = False
        
        case 3:
            s2_available = False
            s4_available = False
            s5_available = False
        
        case 4:
            s5_available = False
        
        case 5:
            pass
    
    
    return render_template(serieTemplate, isLogged=isLogged, serie_title=serie_title, serie_image_background=serie_image_background, serie_cover_image=serie_cover_image,
                           serie_name=serie_name, serie_release_year=serie_release_year, serie_duration=serie_duration, serie_total_seasons_number=serie_total_seasons_number,
                           serie_star_classification=serie_star_classification, serie_description=serie_description, episode_1_cover_image=episode_1_cover_image,
                           episode_2_cover_image=episode_2_cover_image, episode_3_cover_image=episode_3_cover_image, episode_4_cover_image=episode_4_cover_image, 
                           episode_5_cover_image=episode_5_cover_image, episode_6_cover_image=episode_6_cover_image, episode_7_cover_image=episode_7_cover_image, 
                           episode_8_cover_image=episode_8_cover_image, episode_9_cover_image=episode_9_cover_image, episode_10_cover_image=episode_10_cover_image, 
                           episode_11_cover_image=episode_11_cover_image, episode_12_cover_image=episode_12_cover_image, episode_13_cover_image=episode_13_cover_image,
                           episode_14_cover_image=episode_14_cover_image, episode_15_cover_image=episode_15_cover_image, episode_16_cover_image=episode_16_cover_image,episode_video=episode_video,
                           episode_limit=episode_limit, total_num_seasons = total_num_seasons, s1_available=s1_available, s2_available=s2_available, s3_available=s3_available,
                           s4_available=s4_available, s5_available=s5_available, ep1_available=ep1_available, ep2_available=ep2_available, ep3_available=ep3_available, ep4_available=ep4_available, 
                           ep5_available=ep5_available, ep6_available=ep6_available, ep7_available=ep7_available, ep8_available=ep8_available,
                           ep9_available=ep9_available, ep10_available=ep10_available, ep11_available=ep11_available, ep12_available=ep12_available,
                           ep13_available=ep13_available, ep14_available=ep14_available, ep15_available=ep15_available, ep16_available=ep16_available)

if __name__ == "__main__":
    app.run(debug=True)
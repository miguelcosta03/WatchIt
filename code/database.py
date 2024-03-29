import pyodbc
from datetime import datetime


class Database:
    def __init__(self, driver, server, port, database, uid, pwd):
        self.driver = driver
        self.server = str(server).replace("'",'')
        self.port = port
        self.database = str(database).replace("'", '')
        self.uid = str(uid).replace("'", '')
        self.pwd = str(pwd).replace("'", '')

        connectionData = (f"Driver={self.driver};"
                    f"Server={self.server},{self.port};"
                    f"Database={self.database};"
                    f"UID={self.uid};"
                    f"PWD={self.pwd};")

        self.connection = pyodbc.connect(connectionData)
        self.cursor = self.connection.cursor()

    def checkIfUserExistsByEmail(self, email):
        emailQuery = f"""SELECT Email_Utilizador FROM dbo.Utilizadores
                        WHERE Email_Utilizador = '{email}'"""

        self.cursor.execute(emailQuery)
        checkIfUserExists = self.cursor.fetchall()

        try:
            formattedUserExists = checkIfUserExists[0][0]
            if email == formattedUserExists:
                return True

        except IndexError:
            return False

    def createNewUser(self, email, username, password):
        date = datetime.now().strftime('%Y%m%d%H%M')
        createUserQuery = f"""INSERT INTO dbo.Utilizadores
                    VALUES ('{email}', '{username}', '{password}', '0000', '{date}');"""
        
        self.cursor.execute(createUserQuery)
        self.connection.commit()

    def loginUser(self, email, password):
        query = f"""SELECT Email_Utilizador FROM dbo.Utilizadores
                    WHERE Email_Utilizador='{email}'"""
        
        passwordQuery = f"""Select Password_Utilizador FROM dbo.Utilizadores
                            WHERE Email_Utilizador='{email}'"""

        self.cursor.execute(query)
        userEmail = self.cursor.fetchall()
        formattedUserEmail = userEmail[0][0]

        self.cursor.execute(passwordQuery)
        userPassword = self.cursor.fetchall()
        formattedUserPassword = userPassword[0][0]

        if email == formattedUserEmail and password == formattedUserPassword:
            return True
        
        else:
            return False

    def getUserID(self, email):
        query = f"""SELECT ID_Utilizador FROM dbo.Utilizadores
                    WHERE Email_Utilizador='{email}'"""
        
        self.cursor.execute(query)
        userID = self.cursor.fetchall()
        return str(userID).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getUserEmail(self, userID):
        query = f"""SELECT Email_Utilizador FROM dbo.Utilizadores
                    WHERE ID_Utilizador={userID};"""
        self.cursor.execute(query)
        userEmail = self.cursor.fetchall()
        return str(userEmail).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getUsername(self, userID):
        query = f"""SELECT Nome_Utilizador FROM dbo.Utilizadores
                    WHERE ID_Utilizador='{userID}'"""
        self.cursor.execute(query)
        username = self.cursor.fetchall()
        return str(username).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getPasswordVerificationCode(self, userID):
        query = f"""SELECT Codigo_Recuperacao_Password FROM dbo.Utilizadores
                    WHERE ID_Utilizador='{userID}'"""

        self.cursor.execute(query)
        pwdVerCode = self.cursor.fetchall()
        return str(pwdVerCode).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
        
    def getVerificationCodeRegisteredDate(self, userID):
        query = f"""SELECT Data_Registo_Cod_Recup FROM dbo.Utilizadores
                    WHERE ID_Utilizador='{userID}'"""
        self.cursor.execute(query)
        verCodeRegisteredDate = self.cursor.fetchall()
        return str(verCodeRegisteredDate).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def checkIfIPIsRegistered(self, deviceIP):
        query = f"""SELECT ID_Utilizador FROM dbo.Conexoes
                    WHERE IP_Dispositivo='{deviceIP}'"""
        self.cursor.execute(query)
        userID = self.cursor.fetchall()
        formattedUserID = str(userID).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
        return bool(len(formattedUserID) > 0)

    def getConnectedDeviceIP(self, userID):
        query = f"""SELECT IP_Dispositivo FROM dbo.Conexoes
                    WHERE ID_Utilizador={userID}"""
        self.cursor.execute(query)
        deviceIP = self.cursor.fetchall()
        return str(deviceIP).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','').replace(' ','')

    def getUserIDByIP(self, ipAddress):
        query = f"""SELECT ID_Utilizador FROM dbo.Conexoes
                    WHERE IP_Dispositivo='{ipAddress}'"""
        self.cursor.execute(query)
        userID = self.cursor.fetchall()
        return str(userID).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','').replace(' ','')
        
    def checkIfIsConnectedToAnotherDevice(self, userID):
        query = f"""SELECT Conectado FROM dbo.Conexoes
                    WHERE ID_Utilizador={userID}"""
        self.cursor.execute(query)
        isConnected = self.cursor.fetchall()
        formmatedIsConnected = str(isConnected).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

        if int(formmatedIsConnected) == 0:
            return False
        
        else:
            return True
    
    def updateDeviceConnectionNumber(self, userID, ipAddress):
        query = f"""UPDATE dbo.Conexoes
                        SET Conectado = Conectado + 1,
                        IP_Dispositivo = '{ipAddress}'
                    WHERE ID_Utilizador={userID};"""
        self.cursor.execute(query)
        self.connection.commit()

    def updateDeviceIP(self, userID, deviceIP):
        query = f"""UPDATE dbo.Conexoes
                        SET IP_Dispositivo='{deviceIP}'
                    WHERE ID_Utilizador = {userID}"""
        self.cursor.execute(query)
        self.connection.commit()
        
    def addDeviceConnection(self, userID, ipAddress):
        query = f"""INSERT INTO dbo.Conexoes
                    VALUES ({userID}, 1, '{ipAddress}');"""
        self.cursor.execute(query)
        self.connection.commit()

    def updateEmail(self, userID, newEmail):
        query = f"""UPDATE dbo.Utilizadores
                        SET Email_Utilizador = '{newEmail}'
                    WHERE ID_Utilizador = {userID}"""
        self.cursor.execute(query)
        self.connection.commit()

    def updateUsername(self, userID, newUsername):
        query = f"""UPDATE dbo.Utilizadores
                        SET Nome_Utilizador = '{newUsername}'
                    WHERE ID_Utilizador = {userID}"""
        self.cursor.execute(query)
        self.connection.commit()
        
    def updatePasswordVerificationCode(self, userID, newPasswordVerificationCode):
        newRegisterDate = datetime.now().strftime('%Y%m%d%H%M')
        query = f"""UPDATE dbo.Utilizadores
                        SET Codigo_Recuperacao_Password = '{newPasswordVerificationCode}',
                        Data_Registo_Cod_Recup = '{newRegisterDate}'
                    WHERE ID_Utilizador = {userID}"""
        self.cursor.execute(query)
        self.connection.commit()

    def checkSendingEmailRecuperationCode(self, registeredDate):
        if int(datetime.now().strftime('%Y%m%d%H%M')) - int(registeredDate) >= 10:
            return True
        else:
            return False
    
    def updateSendingEmailRecuperationCode(self, email, status):
        query = f"""UPDATE dbo.Utilizadores
                        SET Enviar_Email_Recuperacao={status}
                    WHERE Email_Utilizador='{email}';"""
        self.cursor.execute(query)
        self.connection.commit()

    def updateUserPassword(self, userID, password):
        query = f"""UPDATE dbo.Utilizadores
                        SET Password_Utilizador='{password}'
                    WHERE ID_Utilizador='{userID}'"""
        self.cursor.execute(query)
        self.connection.commit()
        
    def getSerieBackgroundImage(self, serie_id):
        query = f"""SELECT 
                        Imagem_Background
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        background_image = self.cursor.fetchall()
        return str(background_image).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getSerieCoverImage(self, serie_id):
        query = f"""SELECT
                        Imagem_Capa
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        cover_image = self.cursor.fetchall()
        return str(cover_image).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getTrendingID(self):
        trendingIDs = []
        query = """SELECT ID
                    FROM dbo.Tendencias"""
        self.cursor.execute(query)
        trendingSeries = self.cursor.fetchall()
        for id in trendingSeries:
            formattedID = str(id).replace('(','').replace(')','').replace(' ','').replace(',','')
            trendingIDs.append(int(formattedID))
        return trendingIDs
    
    def getTrendingDescription(self, ID):
        query = f"""SELECT Descricao
                   FROM dbo.Tendencias
                   WHERE ID_Popular={ID}"""
        self.cursor.execute(query)
        trendingDescription = self.cursor.fetchall()
        return str(trendingDescription).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
        
    def getSerieID(self, serie_name):
        query = f"""SELECT
                        ID
                    FROM dbo.Series
                    WHERE nome='{serie_name}'"""
        self.cursor.execute(query)
        serie_id = self.cursor.fetchall()
        return str(serie_id).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getSerieName(self, serie_id):
        query = f"""SELECT 
                        Nome
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        serie_name = self.cursor.fetchall()
        return str(serie_name).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getSerieReleaseYear(self, serie_id):
        query = f"""SELECT
                        Ano_Lancamento
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        serie_release_year = self.cursor.fetchall()
        return str(serie_release_year).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getSerieDuration(self, serie_id):
        query = f"""SELECT
                        Duracao
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        serie_duration = self.cursor.fetchall()
        return str(serie_duration).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getSerieTotalSeasonsNumber(self, serie_id):
        query = f"""SELECT
                        Num_Temporadas
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        serie_total_seasons_number = self.cursor.fetchall()
        return str(serie_total_seasons_number).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getSerieStarClassification(self, serie_id):
        query = f"""SELECT
                        Classificacao
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        serie_classification = self.cursor.fetchall()
        return str(serie_classification).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getSerieDescription(self, serie_id):
        query = f"""SELECT
                        Descricao
                    FROM dbo.Series
                    WHERE ID={serie_id}"""
        self.cursor.execute(query)
        serie_duration = self.cursor.fetchall()
        return str(serie_duration).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def updateCurrentSerieURL(self, serie_url, serie_name):
        query = f"""UPDATE dbo.SerieAtual
                        SET Serie_URL='{serie_url}',
                        Nome='{serie_name}'
                   WHERE ID_Serie=1;"""
        self.cursor.execute(query).commit()
        
    def getCurrentSerieURL(self):
        query = f"""SELECT Serie_URL FROM dbo.SerieAtual;"""
        self.cursor.execute(query)
        serieURL = self.cursor.fetchall()
        return str(serieURL).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getCurrentSerieName(self):
        query = f"""SELECT Nome FROM dbo.SerieAtual;"""
        self.cursor.execute(query)
        serieName = self.cursor.fetchall()
        return str(serieName).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getEpisodeCoverImage(self, serie_id, season_number, episode_number):
        query = f"""SELECT 
                        Imagem_Capa
                    FROM dbo.Episodios
                    WHERE(ID_Serie={serie_id} AND Num_Temporada={season_number} AND Num_Episodio={episode_number});"""
        
        self.cursor.execute(query)
        episode_cover_image = self.cursor.fetchall()
        return str(episode_cover_image).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getEpisodeVideo(self, serie_id, season_number, episode_number):
        query = f"""SELECT
                        Video_Episodio
                    FROM dbo.Episodios
                    WHERE (ID_Serie='{serie_id}' AND Num_Temporada={season_number} AND Num_Episodio={episode_number});"""

        self.cursor.execute(query)
        episode_video = self.cursor.fetchall()
        return str(episode_video).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getSerieTotalSeasonEpisodes(self, serie_id, season_number):
        query = f"""SELECT
                        Num_Eps_Temp_{season_number}
                    FROM dbo.EpsPorTemporada
                    WHERE ID_Serie={serie_id}"""
        self.cursor.execute(query)
        total_season_episodes = self.cursor.fetchall()
        return str(total_season_episodes).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getSerieID(self, serieName):
        query = f"""SELECT ID FROM dbo.Series
                    WHERE Nome='{serieName}'"""
        self.cursor.execute(query)
        serieID = self.cursor.fetchall()
        return str(serieID).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def checkIfIsFavouriteSerie(self, userID, serieID):
        query = f"""SELECT ID_Serie FROM dbo.Series_Favoritas
                    WHERE ID_Utilizador={userID} AND ID_Serie = {serieID}"""
        self.cursor.execute(query)
        isFavouriteSerie = self.cursor.fetchall()

        try:
            if serieID == isFavouriteSerie[0][0]:
                return True

        except IndexError:
            return False

    def insertFavouriteSerie(self, userID, serieID):
        query = f"""INSERT INTO dbo.Series_Favoritas
                    VALUES ({userID}, {serieID});"""

        self.cursor.execute(query)
        self.connection.commit()

    def removeFavouriteSerie(self, userID, serieID):
        query = f"""DELETE FROM dbo.Series_Favoritas
                    WHERE ID_Utilizador={userID} AND ID_Serie={serieID}"""
        
        self.cursor.execute(query)
        self.connection.commit()

    def getMovieID(self, movieName):
        query = f"""SELECT ID_Filme FROM dbo.Filmes
                    WHERE Nome='{movieName}'"""
        self.cursor.execute(query)
        movieID = self.cursor.fetchall()
        return str(movieID).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def checkIfIsFavouriteMovie(self, userID, movieID):
        query = f"""SELECT ID_Filme FROM dbo.Filmes_Favoritos
                    WHERE ID_Utilizador={int(userID)} AND ID_Filme={int(movieID)}"""

        self.cursor.execute(query)
        isFavouriteMovie = self.cursor.fetchall()

        try:
            if movieID == isFavouriteMovie[0][0]:
                return True

        except IndexError:
            return False
        
    def insertFavouriteMovie(self, userID, movieID):
        query = f"""INSERT INTO dbo.Filmes_Favoritos
                    VALUES ({userID}, {movieID});"""
        
        self.cursor.execute(query)
        self.connection.commit()

    def removeFavouriteMovie(self, userID, movieID):
        query = f"""DELETE FROM dbo.Filmes_Favoritos
                    WHERE ID_Utilizador={userID} AND ID_Filme={movieID}"""

        self.cursor.execute(query)
        self.connection.commit()

    def getMovieName(self, movieID):
        query = f"""SELECT
                        Nome
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        movieName = self.cursor.fetchall()
        return str(movieName).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getMovieReleaseYear(self, movieID):
        query = f"""SELECT
                        Ano_Lancamento
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        release_year = self.cursor.fetchall()
        return str(release_year).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getMovieDuration(self, movieID):
        query = f"""SELECT
                        Duracao
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        duration = self.cursor.fetchall()
        return str(duration).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getMovieStarClassification(self, movieID):
        query = f"""SELECT
                        Classificacao
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        classification = self.cursor.fetchall()
        return str(classification).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getMovieDescription(self, movieID):
        query = f"""SELECT
                        Descricao
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        description = self.cursor.fetchall()
        return str(description).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '')
    
    def getMovieCoverImage(self, movieID):
        query = f"""SELECT
                        Imagem_Capa
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        cover_image = self.cursor.fetchall()
        return str(cover_image).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')

    def getMovieBackgroundImage(self, movieID):
        query = f"""SELECT
                        Imagem_Background
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        background_image = self.cursor.fetchall()
        return str(background_image).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getMovieVideo(self, movieID):
        query = f"""SELECT 
                        Video_Filme
                    FROM dbo.Filmes
                    WHERE ID_Filme={movieID}"""
        self.cursor.execute(query)
        movieVideo = self.cursor.fetchall()
        return str(movieVideo).replace('[', '').replace(']','').replace('(','').replace(')','').replace(',','').replace("'",'')

    def updateCurrentMovieURL(self, movie_url, movie_name):
        query = f"""UPDATE dbo.FilmeAtual
                        SET Filme_URL='{movie_url}',
                        Nome='{movie_name}'
                   WHERE ID_Filme=1;"""
        self.cursor.execute(query).commit()
        
    def getCurrentMovieURL(self):
        query = """SELECT Filme_URL FROM dbo.FilmeAtual;"""
        self.cursor.execute(query)
        movieURL = self.cursor.fetchall()
        return str(movieURL).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')
    
    def getCurrentMovieName(self):
        query = """SELECT Nome FROM dbo.FilmeAtual;"""
        self.cursor.execute(query)
        movieName = self.cursor.fetchall()
        return str(movieName).replace('[', '').replace(']', '').replace('(', '').replace(')','').replace("'", '').replace(',','')




database = Database('SQL Server', '192.168.20.9', 1433, 'WatchItDB', 'su', '123456')
database.updateDeviceConnectionNumber(1, '192.168.20.9')
print(database.checkIfIPIsRegistered('192.168.20.9'))
from dataclasses import dataclass
import pyodbc

class Database:
    def __init__(self, driver, server, databaseName):
        self.driver = driver
        self.server = server
        self.databaseName = databaseName

        connectionData = (
            f"Driver={self.driver};"
            f"Server={self.server};"
            f"Database={self.databaseName};"
        )

        self.connection = pyodbc.connect(connectionData)
        self.cursor = self.connection.cursor()

    def checkIfUserExistsByEmail(self, email):
        emailQuery = f"""SELECT Email_Utilizador FROM dbo.Utilizadores
                        WHERE Email_Utilizador = '{email}'"""

        self.cursor.execute(emailQuery)
        checkIfUserExists = self.cursor.fetchall()
        formattedUserExists = checkIfUserExists[0][0]

        if email == formattedUserExists:
            return True
        else:
            return False

    def createNewUser(self, email, username, password):
        createUserQuery = f"""INSERT INTO dbo.Utilizadores
                    VALUES ('{email}', '{username}', '{password}');"""
        
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
    
    def getTrendingSeriesID(self):
        trending_IDs = []
        query = """SELECT ID
                    FROM dbo.Tendencias_Series"""
        self.cursor.execute(query)
        trending_series = self.cursor.fetchall()
        for id in trending_series:
            formatted_id = str(id).replace('(','').replace(')','').replace(' ','').replace(',','')
            trending_IDs.append(int(formatted_id))
        return trending_IDs

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
                    WHERE ID='{serie_id}'"""
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
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

    def createNewUser(self, email, username, password):
        query = f"""INSERT INTO dbo.Utilizadores
                    VALUES ('{email}', '{username}', '{password}');"""
        
        self.cursor.execute(query)
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

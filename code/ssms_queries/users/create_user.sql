USE [WatchItDB];

CREATE TABLE Utilizadores (
	ID_Utilizador INT IDENTITY(1, 1) PRIMARY KEY,
	Email_Utilizador VARCHAR(255),
	Nome_Utilizador VARCHAR(255),
	Password_Utilizador VARCHAR(255),
	Codigo_Recuperacao_Email VARCHAR(255),
	Data_Registo_Cod_Recup VARCHAR(255)
);

SELECT * FROM dbo.Utilizadores;
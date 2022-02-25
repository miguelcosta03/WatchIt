USE [WatchItDB];

CREATE TABLE Tendencias_Series(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	ID_Serie INT,
	Imagem_Background VARCHAR(255));

INSERT INTO dbo.Tendencias_Series VALUES (1, '../static/images/series_background/peaky_blinders/peaky_blinders_background.jpg');
INSERT INTO dbo.Tendencias_Series VALUES (2, '../static/images/series_background/la_casa_de_papel/la_casa_de_papel_background.jpg');
INSERT INTO dbo.Tendencias_Series VALUES (3, '../static/images/series_background/euphoria/euphoria_background.jpg');

SELECT * FROM dbo.Tendencias_Series;


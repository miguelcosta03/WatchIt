CREATE TABLE Episodios(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	ID_Serie VARCHAR(255),
	Num_Temporada INT,
	Num_Episodio INT,
	Video_Episodio VARCHAR(255),
	Imagem_Capa VARCHAR(255)
);
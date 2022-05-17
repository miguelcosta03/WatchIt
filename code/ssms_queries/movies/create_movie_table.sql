CREATE TABLE Filmes(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	Nome VARCHAR(255),
	Ano_Lancamento INT,
	Duracao VARCHAR(255),
	Classificacao FLOAT,
	Descricao VARCHAR(255),
	Imagem_Capa VARCHAR(255),
	Imagem_Background VARCHAR(255),
	Categorias VARCHAR(255)
);
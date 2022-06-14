CREATE TABLE Conexoes (
	ID_Conexao INT IDENTITY(1, 1) PRIMARY KEY,
	ID_Utilizador INT,
	Conectado INT,
	IP_Dispositivo VARCHAR(255)
);

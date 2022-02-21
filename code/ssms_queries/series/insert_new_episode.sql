USE [WatchItDB];

INSERT INTO dbo.Episodios VALUES('Peaky Blinders', 1, 3, '..static/images/series_background/peaky_blinders/S1/EP3/ep3.mp4', 
								'../static/images/series_background/peaky_blinders/S1/EP3/ep3_background.jpg');


SELECT
    Video_Episodio
FROM dbo.Episodios
WHERE (Nome_Serie='Peaky Blinders' AND Num_Temporada=1 AND Num_Episodio=1)

SELECT * FROM dbo.Episodios;
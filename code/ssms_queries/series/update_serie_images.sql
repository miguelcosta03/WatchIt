USE [WatchItDB];

UPDATE dbo.Series
	SET Imagem_Background='../static/images/series_background/peaky_blinders/peaky_blinders_background.png',
	Imagem_Capa='../static/images/series_background/thumbnails/peakyblinders.jpg'
WHERE ID=1;


UPDATE dbo.Series
	SET Imagem_Background='../static/images/series_background/peaky_blinders/peaky_blinders_background.png',
	Imagem_Capa='../static/images/series_background/thumbnails/peakyblinders.jpg'
WHERE ID=1;

SELECT * FROM dbo.Series;
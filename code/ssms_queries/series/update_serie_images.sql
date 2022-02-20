USE [WatchItDB];

UPDATE dbo.Series
	SET Imagem_Background='../static/images/series_background/peaky_blinders/peaky_blinders_background.png',
	Imagem_Capa='../static/images/series_background/thumbnails/peaky_blinders.jpg'
WHERE ID=1;


UPDATE dbo.Series
	SET Imagem_Background='../static/images/series_background/la_casa_de_papel/la_casa_de_papel_background.jpg',
	Imagem_Capa='../static/images/series_background/thumbnails/la_casa_de_papel.jfif'
WHERE ID=2;
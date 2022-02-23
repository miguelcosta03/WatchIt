USE [WatchItDB];

SELECT * FROM dbo.EpsPorTemporada;

SELECT
	dbo.EpsPorTemporada.ID_Serie, 
	dbo.Series.Nome, 
	dbo.EpsPorTemporada.Num_Eps_Temp_1
FROM dbo.EpsPorTemporada
INNER JOIN dbo.Series ON dbo.EpsPorTemporada.ID_Serie = dbo.Series.ID;
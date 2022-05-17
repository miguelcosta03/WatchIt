function scrollToEpisodesGrid() {
    window.scrollTo({
        top : document.body.scrollHeight / 2,
        behavior : 'smooth'
    });
}

function scrollToFirstEpisode() {
    firstEpisodeLabel = document.getElementById('firstEpisodeLabel');
    lastEpisodeLabel = document.getElementById('lastEpisodeLabel');
    episodesGrid = document.getElementById('episodesGrid');

    firstEpisodeLabel.style.display = "none";
    lastEpisodeLabel.style.display = "block";
    episodesGrid.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
}

function scrollToLastEpisode() {
    firstEpisodeLabel = document.getElementById('firstEpisodeLabel');
    lastEpisodeLabel = document.getElementById('lastEpisodeLabel');
    episodesGrid = document.getElementById('episodesGrid');
    
    lastEpisodeLabel.style.display = "none";
    firstEpisodeLabel.style.display = "block";
    episodesGrid.scrollTo({
        left : 9999999,
        behavior : 'smooth'
    });
}
function fillPlayerButtonBackgroundColor(buttonID) {
    playerButton = document.getElementById(`${buttonID}`);
    playerButton.style.backgroundColor = "rgba(125, 255, 125, 0.712)";
}

function resetPlayerButtonBackgroundColor(buttonID) {
    playerButton = document.getElementById(`${buttonID}`);
    playerButton.style.backgroundColor = "transparent";
}

function selectNormalPlayer() {
    normalVideoPlayer = document.getElementById('normalVideoPlayer');
    watchItVideoPlayer = document.getElementById('watchItVideoPlayer');

    watchItVideoPlayer.style.display = 'none';
    watchItVideoPlayer.pause();
    normalVideoPlayer.style.display = 'block';

    fillPlayerButtonBackgroundColor('normalPlayerButton');
    resetPlayerButtonBackgroundColor('watchItPlayerButton');

}

function selectWatchItPlayer() {
    normalVideoPlayer = document.getElementById('normalVideoPlayer');
    watchItVideoPlayer = document.getElementById('watchItVideoPlayer');

    normalVideoPlayer.style.display = 'none';
    normalVideoPlayer.pause();
    watchItVideoPlayer.style.display = 'block';
    
    resetPlayerButtonBackgroundColor('normalPlayerButton');
    fillPlayerButtonBackgroundColor('watchItPlayerButton');
}
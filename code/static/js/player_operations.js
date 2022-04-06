function selectNormalPlayer() {
    normalVideoPlayer = document.getElementById('normalVideoPlayer')
    watchItVideoPlayer = document.getElementById('watchItVideoPlayer')

    watchItVideoPlayer.style.display = 'none'
    normalVideoPlayer.style.marginLeft = '27.3vw'
    normalVideoPlayer.style.display = 'block'
}

function selectWatchItPlayer() {
    normalVideoPlayer = document.getElementById('normalVideoPlayer')
    watchItVideoPlayer = document.getElementById('watchItVideoPlayer')

    normalVideoPlayer.style.display = 'none'
    watchItVideoPlayer.style.marginLeft = '27.3vw'
    watchItVideoPlayer.style.display = 'block'
}
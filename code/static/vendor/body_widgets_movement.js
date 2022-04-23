function movePlayerButtons() {
    let winWidth = window.innerWidth;
    let normalPlayer = document.getElementById('normalPlayer');
    let watchItPlayer = document.getElementById('watchItPlayer');

    if (winWidth < 767) {
        normalPlayer.style.position = "absolute";
        watchItPlayer.style.position = "absolute";
        normalPlayer.style.marginTop = "-1vw";
        watchItPlayer.style.marginTop = "-1vw";
        normalPlayer.style.marginLeft= "15vw";
        watchItPlayer.style.marginLeft = "23vw";
    } else {
        normalPlayer.style.position = "absolute";
        watchItPlayer.style.position = "absolute";
        normalPlayer.style.marginTop = "0vw";
        watchItPlayer.style.marginTop = "0vw";
        normalPlayer.style.marginLeft = "17vw";
        watchItPlayer.style.marginLeft = "24.2vw";
    }
}
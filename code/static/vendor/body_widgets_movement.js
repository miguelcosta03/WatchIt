function moveSeasonButtons() {
    let winWidth = window.innerWidth;
    let season1Button = document.getElementById('season1Button');
    let season2Button = document.getElementById('season2Button');
    let season3Button = document.getElementById('season3Button');
    let season4Button = document.getElementById('season4Button');
    let season5Button = document.getElementById('season5Button');

    if (winWidth >= 767 && winWidth <= 1183) {
        season1Button.style.position = "relative";
        season1Button.style.left = "-18vw";
        season2Button.style.left = "-17vw";
        season3Button.style.left = "-16vw";
        season4Button.style.left = "-15vw";
        season5Button.style.left = "-14vw";
    } else {
        season1Button.style.left = "-10vw";
        season2Button.style.left = "-9vw";
        season3Button.style.left = "-8vw";
        season4Button.style.left = "-7vw";
        season5Button.style.left = "-6vw";
    }
}

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

function moveBodyWidgets() {
    moveSeasonButtons();
    movePlayerButtons();
}
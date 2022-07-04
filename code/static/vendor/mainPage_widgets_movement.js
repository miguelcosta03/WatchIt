function resizeWidgets() {
    let winWidth = window.innerWidth;
    let watchT1Button = document.getElementById('watchT1Button');
    let watchT2Button = document.getElementById('watchT2Button');
    let watchT3Button = document.getElementById('watchT3Button');
    let playT1Logo = document.getElementById('playT1Logo');
    let sliderT1Description = document.getElementById('sliderT1Description');

    if (winWidth < 600) {
        watchT1Button.style.position = "absolute";
        watchT1Button.style.marginTop = "-27vw";
        watchT1Button.style.marginLeft = "40vw";
        watchT1Button.style.fontSize = "2.5vw";
        playT1Logo.style.fontSize = "2.5vw";
        sliderT1Description.style.marginTop = "-20vw";
        sliderT1Description.style.fontSize = "2vw";

        watchT2Button.style.position = "absolute";
        watchT2Button.style.marginTop = "-27vw";
        watchT2Button.style.marginLeft = "40vw";
        watchT2Button.style.fontSize = "2.5vw";
        playT2Logo.style.fontSize = "2.5vw";
        sliderT2Description.style.marginTop = "-20vw";
        sliderT2Description.style.fontSize = "2vw";

        watchT3Button.style.position = "absolute";
        watchT3Button.style.marginTop = "-27vw";
        watchT3Button.style.marginLeft = "40vw";
        watchT3Button.style.fontSize = "2.5vw";
        playT3Logo.style.fontSize = "2.5vw";
        sliderT3Description.style.marginTop = "-20vw";
        sliderT3Description.style.fontSize = "2vw";
        
    }
}
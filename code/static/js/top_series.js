let currentTopSerieIndex = 0;


function nextTopSerie() {
    let topSerie1 = document.getElementById('topSerie1');
    let topSerie2 = document.getElementById('topSerie2');
    let topSerie3 = document.getElementById('topSerie3');
    currentTopSerieIndex += 1;
    if (currentTopSerieIndex == 0) {
        topSerie1.style.display = "block";
        topSerie2.style.display = "none";
        topSerie3.style.display = "none";

    } else if (currentTopSerieIndex == 1) {
        topSerie1.style.display = "none";
        topSerie2.style.display = "block";
        topSerie3.style.display = "none";

    } else if (currentTopSerieIndex == 2){
        topSerie1.style.display = "none";
        topSerie2.style.display = "none";
        topSerie3.style.display = "block";
    }
    else {
        if (currentTopSerieIndex > 2) {
            currentTopSerieIndex = 0;
            topSerie1.style.display = "block";
            topSerie2.style.display = "none";
            topSerie3.style.display = "none";
        } else if (currentTopSerieIndex < 0) {
            currentTopSerieIndex = 2;
            topSerie1.style.display = "none";
            topSerie2.style.display = "none";
            topSerie3.style.display = "block";
        }
    }
}

function previousTopSerie() {
    currentTopSerieIndex -= 1;
    if (currentTopSerieIndex == 0) {
        topSerie1.style.display = "block";
        topSerie2.style.display = "none";
        topSerie3.style.display = "none";
    } else if (currentTopSerieIndex == 1) {
        topSerie1.style.display = "none";
        topSerie2.style.display = "block";
        topSerie3.style.display = "none";
    } else if (currentTopSerieIndex == 2){
        topSerie1.style.display = "none";
        topSerie2.style.display = "none";
        topSerie3.style.display = "block";
    }
    else {
        if (currentTopSerieIndex > 2) {
            currentTopSerieIndex = 0;
            topSerie1.style.display = "block";
            topSerie2.style.display = "none";
            topSerie3.style.display = "none";
        } else if (currentTopSerieIndex < 0) {
            currentTopSerieIndex = 2;
            topSerie1.style.display = "none";
            topSerie2.style.display = "none";
            topSerie3.style.display = "block";
        }
    }
}
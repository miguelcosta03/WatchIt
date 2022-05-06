let currentTopSerieIndex = 0;


function nextTopSerie() {
    let topSerie1 = document.getElementById('topSerie1');
    let topSerie2 = document.getElementById('topSerie2');
    let topSerie3 = document.getElementById('topSerie3');
    let nextButton = document.getElementById('nextSerieArrow');
    
    currentTopSerieIndex += 1;
    function showTopSerie1() {
        topSerie1.style.display = "block";
        topSerie2.style.display = "none";
        topSerie3.style.display = "none";

    }
    
    function showTopSerie2() {
        topSerie1.style.display = "none";
        topSerie2.style.display = "block";
        topSerie3.style.display = "none";
    }
    function showTopSerie3() { 
        topSerie1.style.display = "none";
        topSerie2.style.display = "none";
        topSerie3.style.display = "block";
    }

    if (currentTopSerieIndex == 0) {
        $("#topSerie3Div").fadeOut(1000);
        $("#topSerie1Div").fadeIn(1000);
        setTimeout(() => {
            showTopSerie1();
        }, 1000);
        setTimeout(() => {
            nextButton.click();
        }, 3000);

    } else if (currentTopSerieIndex == 1) {
        $("#topSerie1Div").fadeOut(1000);
        $("#topSerie2Div").fadeIn(1000);
        setTimeout(() => {
            showTopSerie2();
        }, 1000);
        setTimeout(() => {
            nextButton.click();
        }, 3000);
        
    } else if (currentTopSerieIndex == 2){
        $("#topSerie2Div").fadeOut(1000);
        $("#topSerie3Div").fadeIn(1000);
        setTimeout(() => {
            showTopSerie3();
        }, 1000);
        setTimeout(() => {
            nextButton.click();
        }, 3000);
    }
    else {
        if (currentTopSerieIndex > 2) {
            currentTopSerieIndex = 0;
            $("#topSerie3Div").fadeOut(1000);
            $("#topSerie1Div").fadeIn(1000);
            setTimeout(() => {
                showTopSerie1();
            }, 1000);
            setTimeout(() => {
                nextButton.click();
            }, 3000);

        } else if (currentTopSerieIndex < 0) {
            currentTopSerieIndex = 2;
            $("#topSerie1Div").fadeOut(1000);
            $("#topSerie3Div").fadeIn(1000);
            setTimeout(() => {
                showTopSerie3();
            }, 1000);
            setTimeout(() => {
                nextButton.click();
            }, 3000);
        }
    }
}

function previousTopSerie() {
    let topSerie1 = document.getElementById('topSerie1');
    let topSerie2 = document.getElementById('topSerie2');
    let topSerie3 = document.getElementById('topSerie3');

    function showTopSerie1() {
        topSerie1.style.display = "block";
        topSerie2.style.display = "none";
        topSerie3.style.display = "none";

    }
    function showTopSerie2() {
        topSerie1.style.display = "none";
        topSerie2.style.display = "block";
        topSerie3.style.display = "none";
    }
    function showTopSerie3() { 
        topSerie1.style.display = "none";
        topSerie2.style.display = "none";
        topSerie3.style.display = "block";
    }


    currentTopSerieIndex -= 1;
    if (currentTopSerieIndex == 0) {
        $("#topSerie2Div").fadeOut(1000);
        $("#topSerie1Div").fadeIn(1000);
        setTimeout(() => {
            showTopSerie1();
        }, 1000);

    } else if (currentTopSerieIndex == 1) {
        $("#topSerie3Div").fadeOut(1000);
        $("#topSerie2Div").fadeIn(1000);
        setTimeout(() => {
            showTopSerie2();
        }, 1000);

    } else if (currentTopSerieIndex == 2){
        $("#topSerie2Div").fadeOut(1000);
        $("#topSerie3Div").fadeIn(1000);
        setTimeout(() => {
            showTopSerie3();
        }, 1000);
    }
    else {
        if (currentTopSerieIndex > 2) {
            currentTopSerieIndex = 0;
            $("#topSerie3Div").fadeOut(1000);
            $("#topSerie1Div").fadeIn(1000);
            setTimeout(() => {
                showTopSerie1();
            }, 1000);

        } else if (currentTopSerieIndex < 0) {
            currentTopSerieIndex = 2;
            $("#topSerie1Div").fadeOut(1000);
            $("#topSerie3Div").fadeIn(1000);
            setTimeout(() => {
                showTopSerie3();
            }, 1000);
        }
    }
}
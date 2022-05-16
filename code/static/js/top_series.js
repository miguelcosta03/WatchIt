let currentTopSerieIndex = 0;
let countS1 = true;
let countS2 = false;
let countS3 = false;
let waitS1 = undefined;
let waitS2 = undefined;
let waitS3 = undefined;

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
        changeSlide = false;

    }

    function showTopSerie2() {
        topSerie1.style.display = "none";
        topSerie2.style.display = "block";
        topSerie3.style.display = "none";
        setTimeout(() => {
            changeSlide = true;
        }, 5000)
    }

    function showTopSerie3() { 
        topSerie1.style.display = "none";
        topSerie2.style.display = "none";
        topSerie3.style.display = "block";
    }

    if (currentTopSerieIndex == 0) {
        $("#topSerie3Div").fadeOut(50);
        $("#topSerie1Div").fadeIn(500);
        showTopSerie1();
        countS1 = true;
        countS2 = false;
        countS3 = false;

        if (countS1 === true) {
            clearTimeout(waitS3);
        }
        
        waitS1 = setTimeout(() => {
            nextButton.click();
        }, 3000);
        
    } else if (currentTopSerieIndex == 1) {
        $("#topSerie1Div").fadeOut(50);
        $("#topSerie2Div").fadeIn(500);
        showTopSerie2();
        counts1 = false;
        countS2 = true;
        countS3 = false;

        if (countS2 === true) {
            clearTimeout(waitS1);
        }

        waitS2 = setTimeout(() => {
            nextButton.click();
        }, 3000);

    } else if (currentTopSerieIndex == 2){
        $("#topSerie2Div").fadeOut(50);
        $("#topSerie3Div").fadeIn(500);
        showTopSerie3();
        countS1 = false;
        countS2 = false;
        countS3 = true;

        if (countS3 === true){
            clearTimeout(waitS2);
        }
        
        waitS3 = setTimeout(() => {
            nextButton.click();
        }, 3000);
    }
    
    else {
        if (currentTopSerieIndex > 2) {
            currentTopSerieIndex = 0;
            $("#topSerie3Div").fadeOut(50);
            $("#topSerie1Div").fadeIn(500);
            showTopSerie1();
            countS1 = true;
            countS2 = false;
            countS3 = false;
    
            if (countS1 === true){
                clearTimeout(waitS3);
            }
            
            waitS1 = setTimeout(() => {
                nextButton.click();
            }, 3000);

        } else if (currentTopSerieIndex < 0) {
            currentTopSerieIndex = 2;
            $("#topSerie1Div").fadeOut(50);
            $("#topSerie3Div").fadeIn(500);
            showTopSerie3();
            countS1 = false;
            countS2 = false;
            countS3 = true;
    
            if (countS3 === true){
                clearTimeout(waitS2);
            }
            
            waitS3 = setTimeout(() => {
                nextButton.click();
            }, 3000);
        }
    }
}

function previousTopSerie() {
    let topSerie1 = document.getElementById('topSerie1');
    let topSerie2 = document.getElementById('topSerie2');
    let topSerie3 = document.getElementById('topSerie3');
    let nextButton = document.getElementById('nextSerieArrow');
    currentTopSerieIndex -= 1;

    function showTopSerie1() {
        topSerie1.style.display = "block";
        topSerie2.style.display = "none";
        topSerie3.style.display = "none";
        changeSlide = false;

    }

    function showTopSerie2() {
        topSerie1.style.display = "none";
        topSerie2.style.display = "block";
        topSerie3.style.display = "none";
        setTimeout(() => {
            changeSlide = true;
        }, 5000)
    }

    function showTopSerie3() { 
        topSerie1.style.display = "none";
        topSerie2.style.display = "none";
        topSerie3.style.display = "block";
    }

    if (currentTopSerieIndex == 0) {
        $("#topSerie3Div").fadeOut(50);
        $("#topSerie1Div").fadeIn(500);
        showTopSerie1();
        countS1 = true;
        countS2 = false;
        countS3 = false;

        if (countS1 === true) {
            clearTimeout(waitS3);
        }
        
        waitS1 = setTimeout(() => {
            nextButton.click();
        }, 3000);
        
    } else if (currentTopSerieIndex == 1){
        $("#topSerie1Div").fadeOut(50);
        $("#topSerie2Div").fadeIn(500);
        showTopSerie2();
        counts1 = false;
        countS2 = true;
        countS3 = false;

        if (countS2 === true) {
            clearTimeout(waitS1);
        }

        waitS2 = setTimeout(() => {
            nextButton.click();
        }, 3000);

    } else if (currentTopSerieIndex == 2) {
        $("#topSerie2Div").fadeOut(50);
        $("#topSerie3Div").fadeIn(500);
        showTopSerie3();
        countS1 = false;
        countS2 = false;
        countS3 = true;

        if (countS3 === true){
            clearTimeout(waitS2);
        }
        
        waitS3 = setTimeout(() => {
            nextButton.click();
        }, 3000);

    } else {
        if (currentTopSerieIndex < -2) {
            currentTopSerieIndex = 0;
            $("#topSerie2Div").fadeOut(50);
            $("#topSerie1Div").fadeIn(500);
            showTopSerie1();
            countS1 = true;
            countS2 = false;
            countS3 = false;
    
            if (countS1 === true) {
                clearTimeout(waitS2);
            }
            
            waitS1 = setTimeout(() => {
                nextButton.click();
            }, 3000);
        }
        else if (currentTopSerieIndex == -1) {
            $("#topSerie1Div").fadeOut(50);
            $("#topSerie3Div").fadeIn(500);
            showTopSerie3();
            countS1 = false;
            countS2 = false;
            countS3 = true;
    
            if (countS3 === true){
                clearTimeout(waitS1);
            }
            
            waitS3 = setTimeout(() => {
                nextButton.click();
            }, 3000);
            
        } else if (currentTopSerieIndex == -2) {
            $("#topSerie3Div").fadeOut(50);
            $("#topSerie2Div").fadeIn(500);
            showTopSerie2();
            counts1 = false;
            countS2 = true;
            countS3 = false;
    
            if (countS2 === true) {
                clearTimeout(waitS3);
            }
    
            waitS2 = setTimeout(() => {
                nextButton.click();
            }, 3000);
        }
    }
}
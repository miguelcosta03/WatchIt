let currentTopMovieIndex = 0;
let countM1 = true;
let countM2 = false;
let countM3 = false;
let waitM1 = undefined;
let waitM2 = undefined;
let waitM3 = undefined;


function nextTopMovie() {
    let topMovie1 = document.getElementById('topMovie1Div');
    let topMovie2 = document.getElementById('topMovie2Div');
    let topMovie3 = document.getElementById('topMovie3Div');
    let nextButton = document.getElementById('nextMovieArrow');
    currentTopMovieIndex += 1;

    function showTopMovie1() {
        topMovie1.style.display = "block";
        topMovie2.style.display = "none";
        topMovie3.style.display = "none";
    }

    function showTopMovie2() {
        topMovie1.style.display = "none";
        topMovie2.style.display = "block";
        topMovie3.style.display = "none";
    }

    function showTopMovie3() {
        topMovie1.style.display = "none";
        topMovie2.style.display = "none";
        topMovie3.style.display = "block";
    }

    if (currentTopMovieIndex == 0) {
        $('#topMovie3Div').fadeOut(50);
        $('#topMovie1Div').fadeIn(500);
        showTopMovie1();

        countM1 = true;
        countM2 = false;
        countM3 = false;

        if (countM1 === true) {
            clearTimeout(waitM3);
        }
        
        waitM1 = setTimeout(() => {
            nextButton.click();
        }, 3000);

    } else if (currentTopMovieIndex == 1) {
        $('#topMovie1Div').fadeOut(50);
        $('#topMovie2Div').fadeIn(500);
        showTopMovie2();

        countM1 = false;
        countM2 = true;
        countM3 = false;

        if (countM2 === true) {
            clearTimeout(waitM1);
        }

        waitM2 = setTimeout(() => {
            nextButton.click();
        }, 3000);

    } else if (currentTopMovieIndex == 2) {
        $("#topMovie2Div").fadeOut(50);
        $("#topMovie3Div").fadeIn(500);
        showTopMovie3();

        countM1 = false;
        countM2 = false;
        countM3 = true;

        if (countM3 === true){
            clearTimeout(waitM2);
        }
        
        waitM3 = setTimeout(() => {
            nextButton.click();
        }, 3000);
    } else {
        if (currentTopMovieIndex > 2) {
            currentTopMovieIndex = 0;
            $('#topMovie3Div').fadeOut(50);
            $('#topMovie1Div').fadeIn(500);
            showTopMovie1();
    
            countM1 = true;
            countM2 = false;
            countM3 = false;
    
            if (countM1 === true) {
                clearTimeout(waitM3);
            }
            
            waitM1 = setTimeout(() => {
                nextButton.click();
            }, 3000);

        } else if (currentTopMovieIndex < 0) {
            currentTopMovieIndex = 2;
            $("#topMovie2Div").fadeOut(50);
            $("#topMovie3Div").fadeIn(500);
            showTopMovie3();
    
            countM1 = false;
            countM2 = false;
            countM3 = true;
    
            if (countM3 === true){
                clearTimeout(waitM2);
            }
            
            waitM3 = setTimeout(() => {
                nextButton.click();
            }, 3000);
        }
    }
}
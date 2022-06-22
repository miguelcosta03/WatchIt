function resizeWidgets() {
    let winWidth = window.innerWidth;
    let verCodeBox = document.getElementById('verCodeBox');
    let verCodeTitle = document.getElementById('verCodeTitle');
    let firstInput = document.getElementById('first_input');
    let secondInput = document.getElementById('second_input');
    let thirdInput = document.getElementById('third_input');
    let fourthInput = document.getElementById('fourth_input');
    let verCodeButton = document.getElementById('verCodeButton');

    console.log(winWidth);

    if (winWidth < 600) {
        verCodeBox.style.height = "100vw";
        verCodeBox.style.width = "50vw";
        verCodeBox.style.marginTop = "25vw";
        verCodeBox.style.marginLeft = "23vw";

        verCodeTitle.style.fontSize = "4vw";
        verCodeTitle.style.marginLeft = "-12.5vw";

        firstInput.style.height = "10vw";
        firstInput.style.width = "7vw";
        firstInput.style.marginTop = "20vw";
        firstInput.style.marginLeft = "-12vw";

        secondInput.style.height = "10vw";
        secondInput.style.width = "7vw";
        secondInput.style.marginTop = "20vw";
        secondInput.style.marginLeft = "-6.5vw";

        thirdInput.style.height = "10vw";
        thirdInput.style.width = "7vw";
        thirdInput.style.marginTop = "20vw";
        thirdInput.style.marginLeft = "-1vw";

        fourthInput.style.height = "10vw";
        fourthInput.style.width = "7vw";
        fourthInput.style.marginTop = "20vw";
        fourthInput.style.marginLeft = "4.5vw";

        verCodeButton.style.height = "10vw"
        verCodeButton.style.width = "150px";
        verCodeButton.style.marginTop = "35vw";
        verCodeButton.style.marginLeft = "-12vw"

    } else if (winWidth >= 600 && winWidth < 780){
        verCodeBox.style.height = "100vw";
        verCodeBox.style.width = "50vw";
        verCodeBox.style.marginTop = "25vw";
        verCodeBox.style.marginLeft = "23vw";

        verCodeTitle.style.fontSize = "4vw";
        verCodeTitle.style.marginLeft = "-12.5vw";

        firstInput.style.height = "10vw";
        firstInput.style.width = "7vw";
        firstInput.style.marginTop = "20vw";
        firstInput.style.marginLeft = "-12vw";

        secondInput.style.height = "10vw";
        secondInput.style.width = "7vw";
        secondInput.style.marginTop = "20vw";
        secondInput.style.marginLeft = "-6.5vw";

        thirdInput.style.height = "10vw";
        thirdInput.style.width = "7vw";
        thirdInput.style.marginTop = "20vw";
        thirdInput.style.marginLeft = "-1vw";

        fourthInput.style.height = "10vw";
        fourthInput.style.width = "7vw";
        fourthInput.style.marginTop = "20vw";
        fourthInput.style.marginLeft = "4.5vw";

        verCodeButton.style.height = "10vw"
        verCodeButton.style.width = "230px";
        verCodeButton.style.marginTop = "35vw";
        verCodeButton.style.marginLeft = "-12vw"

    } else if (winWidth >= 780 && winWidth < 1000){
        verCodeBox.style.height = "70vw";
        verCodeBox.style.width = "50vw";
        verCodeBox.style.marginTop = "25vw";
        verCodeBox.style.marginLeft = "23vw";

        verCodeTitle.style.fontSize = "4vw";
        verCodeTitle.style.marginLeft = "-12.5vw";

        firstInput.style.height = "10vw";
        firstInput.style.width = "7vw";
        firstInput.style.marginTop = "20vw";
        firstInput.style.marginLeft = "-12vw";

        secondInput.style.height = "10vw";
        secondInput.style.width = "7vw";
        secondInput.style.marginTop = "20vw";
        secondInput.style.marginLeft = "-6.5vw";

        thirdInput.style.height = "10vw";
        thirdInput.style.width = "7vw";
        thirdInput.style.marginTop = "20vw";
        thirdInput.style.marginLeft = "-1vw";

        fourthInput.style.height = "10vw";
        fourthInput.style.width = "7vw";
        fourthInput.style.marginTop = "20vw";
        fourthInput.style.marginLeft = "4.5vw";

        verCodeButton.style.height = "10vw"
        verCodeButton.style.width = "310px";
        verCodeButton.style.marginTop = "35vw";
        verCodeButton.style.marginLeft = "-12vw"

    } else {
        verCodeBox.style.height = "30vw";
        verCodeBox.style.width = "25vw";
        verCodeBox.style.marginTop = "10vw";
        verCodeBox.style.marginLeft = "38vw";

        verCodeTitle.style.fontSize = "30px";
        verCodeTitle.style.marginLeft = "5px";
        
        firstInput.style.height = "5vw";
        firstInput.style.width = "3vw";
        firstInput.style.marginTop = "-5vw";
        firstInput.style.marginLeft = "0vw";

        secondInput.style.height = "5vw";
        secondInput.style.width = "3vw";
        secondInput.style.marginTop = "-5vw";
        secondInput.style.marginLeft = "0vw";
        

        thirdInput.style.height = "5vw";
        thirdInput.style.width = "3vw";
        thirdInput.style.marginTop = "-5vw";
        thirdInput.style.marginLeft = "0vw";

        fourthInput.style.height = "5vw";
        fourthInput.style.width = "3vw";
        fourthInput.style.marginTop = "-5vw";
        fourthInput.style.marginLeft = "0vw";

        verCodeButton.style.height = "5vw";
        verCodeButton.style.width = "15vw";
        verCodeButton.style.marginTop = "0vw";
        verCodeButton.style.marginLeft = "0vw";
    }
}
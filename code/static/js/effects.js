function decreaseButtonBrightness(buttonID) {
    const button = document.getElementById(`${buttonID}`);
    button.style.filter = `brightness(50%)`;
}

function resetButtonBrightness(buttonID) {
    const button = document.getElementById(`${buttonID}`);
    button.style.filter = `brightness(100%)`;
}

function decreaseBrightness(elementID) {
    const element = document.getElementById(`${elementID}`);
    element.style.filter = `brightness(50%)`;
}

function increaseBrightness(elementID) {
    const element = document.getElementById(`${elementID}`);
    element.style.filter = `brightness(80%)`;
}

function increaseOpacity(elementID) {
    const element = document.getElementById(`${elementID}`);
    element.style.filter = `opacity(80%)`;
}

function decreaseOpacity(elementID) {
    const element = document.getElementById(`${elementID}`);
    element.style.filter = `opacity(50%)`;
}

function changePreviousArrowColor() {
    const previousSerieArrow = document.getElementById('previousArrow');
    previousSerieArrow.style.color = "rgba(125, 255, 125, 0.712)";
}

function resetPreviousArrowColor() {
    const previousSerieArrow = document.getElementById('previousArrow');
    previousSerieArrow.style.color = "rgb(255, 255, 255)";
}

function changeNextArrowColor() {
    const nextSerieArrow = document.getElementById('nextArrow');
    nextSerieArrow.style.color = "rgba(125, 255, 125, 0.712)";
}

function resetNextArrowColor() {
    const nextSerieArrow = document.getElementById('nextArrow');
    nextSerieArrow.style.color = "rgb(255, 255, 255)";
}

function focusElement() {
    const firstDigit = document.getElementById('first_input');
    const secondDigit = document.getElementById('second_input');
    const thirdDigit = document.getElementById('third_input');
    const fourthDigit = document.getElementById('fourth_input');

    document.addEventListener('keydown', (event) => {
        let keyPressed = event.key;
        if (keyPressed === "Backspace"){
            if (fourthDigit.value.length > 0) {
                fourthDigit.value = "";
                thirdDigit.value="";
                secondDigit.value="";
                firstDigit.value="";
                
                fourthDigit.focus();
                thirdDigit.focus();
                secondDigit.focus();
                firstDigit.focus();

            }
        }
    });

    firstDigit.focus();

    if (firstDigit.value != "") {
        secondDigit.focus();
    }

    if (secondDigit.value != "") {
        thirdDigit.focus();
    }

    if (thirdDigit.value != "") {
        fourthDigit.focus();
    }
}
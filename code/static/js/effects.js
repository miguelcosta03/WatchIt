function decreaseButtonBrightness(buttonID) {
    let button = document.getElementById(`${buttonID}`);
    button.style.filter = `brightness(50%)`;
}

function resetButtonBrightness(buttonID) {
    let button = document.getElementById(`${buttonID}`);
    button.style.filter = `brightness(100%)`;
}

function decreaseBrightness(elementID) {
    let element = document.getElementById(`${elementID}`);
    element.style.filter = `brightness(80%)`;
}

function increaseBrightness(elementID) {
    let element = document.getElementById(`${elementID}`);
    element.style.filter = `brightness(100%)`;
}

function focusElement() {
    let firstDigit = document.getElementById('first_input');
    let secondDigit = document.getElementById('second_input');
    let thirdDigit = document.getElementById('third_input');
    let fourthDigit = document.getElementById('fourth_input');

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
    })

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
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
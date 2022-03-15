function decreaseButtonBrightness(buttonID) {
    let button = window.document.getElementById(`${buttonID}`)
    button.style.filter = `brightness(50%)`
}

function resetButtonBrightness(buttonID) {
    let button = window.document.getElementById(`${buttonID}`)
    button.style.filter = `brightness(100%)`
}
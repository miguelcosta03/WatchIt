function resizeWidgets() {
    let winWidth = window.innerWidth
    let emailInputField = document.getElementById('emailAddress');
    let passwordInputField = document.getElementById('password');
    let showPasswordButton = document.getElementById('psw_button');
    let sideImage = document.getElementById('sideImage');
    let redirectToSignUpPageButton = document.getElementById('redirectToSignUpPageButton');
    let loginButton = document.getElementById('loginButton');

    if (winWidth < 600) {
        sideImage.style.display = "none";
        emailInputField.style.width = "150px";
        passwordInputField.style.width = "150px";
        showPasswordButton.style.position = "absolute";
        showPasswordButton.style.marginLeft = "15vw";
        redirectToSignUpPageButton.style.marginTop = "5vw";
        redirectToSignUpPageButton.style.marginLeft = "-1vw";
        loginButton.style.width = "35vw";
    }
    else {
        sideImage.style.display = "block";
        emailInputField.style.width = "100%";
        passwordInputField.style.width = "100%";
        showPasswordButton.style.position = "absolute";
        showPasswordButton.style.marginLeft = "1vw";
        redirectToSignUpPageButton.style.marginTop = "-1.1vw";
        redirectToSignUpPageButton.style.marginLeft = "7vw";
    }
}

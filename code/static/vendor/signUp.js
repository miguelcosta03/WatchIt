function resizeWidgets() {
    let winWidth = window.innerWidth;
    let sideImage = document.getElementById('sideImage');
    let emailInputField = document.getElementById('emailAddress');
    let emailLabel = document.getElementById('emailLabel');
    let usernameInputField = document.getElementById('username');
    let usernameLabel = document.getElementById('usernameLabel');
    let passwordInputField = document.getElementById('password');
    let passwordLabel = document.getElementById('passwordLabel');
    let confirmPasswordInputField = document.getElementById('confirmPassword');
    let confirmPasswordLabel = document.getElementById('confirmPasswordLabel');
    let showPasswordButton = document.getElementById('psw_button');
    let showConfirmPasswordButton = document.getElementById('conf_psw_button');
    let signUpButton = document.getElementById('signUpButton');
    let redirectToLoginPageButton = document.getElementById('redirectToLoginPageButton');


    if (winWidth < 780 && winWidth > 600) {
        sideImage.style.display = "none";
        emailInputField.style.width = "150px";
        passwordInputField.style.width = "150px";
        showPasswordButton.style.position = "fixed";
        showPasswordButton.style.marginLeft = "50px";
        redirectToSignUpPageButton.style.marginTop = "5vw";
        redirectToSignUpPageButton.style.marginLeft = "-1vw";
        loginButton.style.width = "31vw";

    } else if (winWidth <= 600) {
        sideImage.style.display = "none";
        emailInputField.style.width = "150px";
        passwordInputField.style.width = "150px";
        showPasswordButton.style.position = "absolute";
        showPasswordButton.style.marginLeft = "70px";
        redirectToSignUpPageButton.style.marginTop = "5vw";
        redirectToSignUpPageButton.style.marginLeft = "-1vw";
        loginButton.style.width = "31vw";
        
    } else if (winWidth >= 780 && winWidth < 1180) {
        redirectToLoginPageButton.style.marginTop = "2vw";
        redirectToLoginPageButton.style.marginLeft = "-0.5vw";

    } else if (winWidth >= 1180 && winWidth < 1400) {
        redirectToLoginPageButton.style.marginTop = "-1.3vw";
        redirectToLoginPageButton.style.marginLeft = "7.5vw";

    } else if (winWidth >= 1400 && winWidth < 1720) {
        redirectToLoginPageButton.style.marginTop = "-1vw";
        redirectToLoginPageButton.style.marginLeft = "7vw";

    } else {
        sideImage.style.display = "block";
        emailInputField.style.width = "100%";
        passwordInputField.style.width = "100%";
        showPasswordButton.style.position = "absolute";
        showPasswordButton.style.marginLeft = "1vw";
        redirectToLoginPageButton.style.marginTop = "-0.9vw";
        redirectToLoginPageButton.style.marginLeft = "6vw";
        loginButton.style.width = "17vw";
    }
}

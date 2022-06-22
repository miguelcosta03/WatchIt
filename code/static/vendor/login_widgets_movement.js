function resizeWidgets() {
    let winWidth = window.innerWidth;
    let sideImage = document.getElementById('sideImage');
    let emailInputField = document.getElementById('emailAddress');
    let passwordInputField = document.getElementById('password');
    let showPasswordButton = document.getElementById('psw_button');
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel');
    let redirectToSignUpPageButton = document.getElementById('redirectToSignUpPageButton');
    let loginButton = document.getElementById('loginButton');

    if (winWidth < 600) {
        sideImage.style.display = "none";
        
        emailInputField.style.width = "190px";
        emailInputField.style.fontSize = "12px";

        passwordInputField.style.width = "190px";
        passwordInputField.style.fontSize = "12px";
        
        showPasswordButton.style.width = "5vw";
        showPasswordButton.style.marginTop = "0vw";
        showPasswordButton.style.marginLeft = "30vw";

        invalidCredentialsLabel.style.fontSize = "2.2vw";

        loginButton.style.width = "46vw";
        
        redirectToSignUpPageButton.style.marginTop = "1vw";
        redirectToSignUpPageButton.style.marginLeft = "-1vw";
        
    } else if (winWidth >= 600 && winWidth < 710) {
        sideImage.style.display = "none";
        
        emailInputField.style.width = "220px";
        emailInputField.style.fontSize = "12px";

        passwordInputField.style.width = "220px";
        passwordInputField.style.fontSize = "12px";
        
        showPasswordButton.style.width = "5vw";
        showPasswordButton.style.marginTop = "0vw";
        showPasswordButton.style.marginLeft = "16vw";

        invalidCredentialsLabel.style.fontSize = "2.2vw";

        loginButton.style.width = "33vw";
        
        redirectToSignUpPageButton.style.marginTop = "-2.4vw";
        redirectToSignUpPageButton.style.marginLeft = "15vw";

    } else if (winWidth >= 710 && winWidth < 780) {
        sideImage.style.display = "none";
        emailInputField.style.width = "150px";
        passwordInputField.style.width = "150px";
        showPasswordButton.style.position = "fixed";
        showPasswordButton.style.marginLeft = "50px";
        redirectToSignUpPageButton.style.marginTop = "5vw";
        redirectToSignUpPageButton.style.marginLeft = "-1vw";
        loginButton.style.width = "31vw";
        
    } else if (winWidth >= 780 && winWidth < 1000) {
        redirectToSignUpPageButton.style.marginTop = "2vw";
        redirectToSignUpPageButton.style.marginLeft = "-0.5vw";
    
    } else if (winWidth >= 1000 && winWidth < 1400) {
        sideImage.style.display = "block";
        sideImage.style.marginTop = "1.5vw";
        redirectToSignUpPageButton.style.marginTop = "2vw";
        redirectToSignUpPageButton.style.marginLeft = "-0.5vw";
        
    } else if (winWidth >= 1400 && winWidth < 1720) {
        redirectToSignUpPageButton.style.marginTop = "-1vw";
        redirectToSignUpPageButton.style.marginLeft = "7vw";
    } else {
        sideImage.style.display = "block";
        emailInputField.style.width = "100%";
        passwordInputField.style.width = "100%";
        showPasswordButton.style.position = "absolute";
        showPasswordButton.style.marginLeft = "1vw";
        redirectToSignUpPageButton.style.marginTop = "-0.9vw";
        redirectToSignUpPageButton.style.marginLeft = "6vw";
        loginButton.style.width = "17vw";
    }
}

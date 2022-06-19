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
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel');
    let signUpButton = document.getElementById('signUpButton');
    let redirectToLoginPageButton = document.getElementById('redirectToLoginPageButton');

    console.log(winWidth);

    if (winWidth <= 600) { 
        if (winWidth < 500) {
            showPasswordButton.style.marginTop = "-1vw";
            showPasswordButton.style.marginLeft = "20vw";
            showConfirmPasswordButton.style.marginTop = "-1vw";
            showConfirmPasswordButton.style.marginLeft = "20vw";
        } else if (winWidth >= 530 && winWidth <= 599) {
            showPasswordButton.style.marginLeft = "10.5vw";
            showConfirmPasswordButton.style.marginLeft = "10.5vw";
        }
        sideImage.style.display = "none";

        emailLabel.style.width = "100px";
        emailLabel.style.fontSize = "2vw";
        emailInputField.style.width = "150px";
        emailInputField.style.fontSize = "12px";

        usernameLabel.style.width = "100px";
        usernameLabel.style.fontSize = "2vw";
        usernameInputField.style.width = "150px";
        usernameInputField.style.fontSize = "12px";

        passwordLabel.style.width = "100px";
        passwordLabel.style.fontSize = "2vw";
        passwordInputField.style.width = "150px";
        passwordInputField.style.fontSize = "12px";

        confirmPasswordLabel.style.width = "150px";
        confirmPasswordLabel.style.fontSize = "2vw";
        confirmPasswordInputField.style.width = "150px";
        confirmPasswordInputField.style.fontSize = "12px";
        
        showPasswordButton.style.marginTop = "-1vw";
        showPasswordButton.style.marginLeft = "20vw";
        showConfirmPasswordButton.style.marginTop = "-1vw";
        showConfirmPasswordButton.style.marginLeft = "20vw";

        invalidCredentialsLabel.style.fontSize = "2.2vw";
        signUpButton.style.width = "31vw";
        
        redirectToLoginPageButton.style.marginTop = "1vw";
        redirectToLoginPageButton.style.marginLeft = "-1vw";

    } else if (winWidth > 600 && winWidth < 780) {
        sideImage.style.display = "none";

        emailLabel.style.width = "100px";
        emailLabel.style.fontSize = "10px"
        emailInputField.style.width = "200px";
        emailInputField.style.fontSize = "12px";

        usernameLabel.style.width = "150px"
        usernameLabel.style.fontSize = "10px";
        usernameInputField.style.width = "200px";
        usernameInputField.style.fontSize = "12px";

        passwordLabel.style.width = "100px";
        passwordLabel.style.fontSize = "10px";
        passwordInputField.style.width = "200px";
        passwordInputField.style.fontSize = "12px";

        confirmPasswordLabel.style.width = "150px";
        confirmPasswordLabel.style.fontSize = "10px";
        confirmPasswordInputField.style.width = "200px";
        confirmPasswordInputField.style.fontSize = "12px"

        showPasswordButton.style.marginLeft = "11vw";
        showConfirmPasswordButton.style.marginLeft = "11vw";

        signUpButton.style.width = "31vw";

        redirectToLoginPageButton.style.marginTop = "1vw";
        redirectToLoginPageButton.style.marginLeft = "-1vw";

    } else if (winWidth >= 780 && winWidth < 1080) {
        sideImage.style.display = "block";
        sideImage.style.marginTop = "3vw";
        sideImage.style.marginLeft = "180px";
        sideImage.style.width = "16vw";
        sideImage.style.height = "26vw";

        emailLabel.style.fontSize = "12px";
        emailInputField.style.width = "145px";
        emailInputField.style.fontSize = "12px";

        usernameLabel.style.fontSize = "12px";
        usernameInputField.style.width = "145px";
        usernameInputField.style.fontSize = "12px";

        passwordLabel.style.fontSize = "12px";
        passwordInputField.style.width = "145px";
        passwordInputField.style.fontSize = "12px";

        confirmPasswordLabel.style.fontSize = "12px";
        confirmPasswordInputField.style.width = "145px";
        confirmPasswordInputField.style.fontSize = "12px";

        showPasswordButton.style.marginTop = "-1vw";
        showPasswordButton.style.marginLeft = "1vw";
        showConfirmPasswordButton.style.marginTop = "-1vw";
        showConfirmPasswordButton.style.marginLeft = "1vw";

        redirectToLoginPageButton.style.marginTop = "2vw";
        redirectToLoginPageButton.style.marginLeft = "-0.5vw";
        
        signUpButton.style.width = "17vw";

    } else if (winWidth >= 1080 && winWidth < 1180) {
        sideImage.style.display = "block";
        sideImage.style.marginLeft = "20vw";

        emailLabel.style.fontSize = "12px";
        emailInputField.style.width = "190px";
        emailInputField.style.fontSize = "15px";

        usernameLabel.style.fontSize = "12px";
        usernameInputField.style.width = "190px";
        usernameInputField.style.fontSize = "15px";

        passwordLabel.style.fontSize = "12px";
        passwordInputField.style.width = "190px";
        passwordInputField.style.fontSize = "15px";

        confirmPasswordLabel.style.fontSize = "12px";
        confirmPasswordInputField.style.width = "190px";
        confirmPasswordInputField.style.fontSize = "15px";

        signUpButton.style.width = "190px";
        
    } else if (winWidth >= 1180 && winWidth < 1400) {
        sideImage.style.display = "block";
        sideImage.style.marginTop = "2vw";
        sideImage.style.marginLeft = "20vw";
        sideImage.style.height = "25vw";
        
        emailLabel.style.fontSize = "12px";
        emailInputField.style.width = "220px";
        emailInputField.style.fontSize = "15px";

        usernameLabel.style.fontSize = "12px";
        usernameInputField.style.width = "220px";
        usernameInputField.style.fontSize = "15px";

        passwordLabel.style.fontSize = "12px";
        passwordInputField.style.width = "220px";
        passwordInputField.style.fontSize = "15px";

        confirmPasswordLabel.style.fontSize = "12px";
        confirmPasswordInputField.style.width = "220px";
        confirmPasswordInputField.style.fontSize = "15px";
        
        invalidCredentialsLabel.style.width = "17vw";
        invalidCredentialsLabel.style.fontSize = "1vw";

        redirectToLoginPageButton.style.marginTop = "-1.4vw";
        redirectToLoginPageButton.style.marginLeft = "8vw";

    } else if (winWidth >= 1400 && winWidth < 1720) {
        sideImage.style.display = "block";
        sideImage.style.height = "24vw";
        sideImage.style.marginTop = "1vw";
        sideImage.style.marginLeft = "20vw";

        emailLabel.style.fontSize = "12px";
        emailInputField.width = "190px";
        emailInputField.style.fontSize = "15px";

        usernameLabel.style.fontSize ="12px";
        usernameInputField.style.width = "245px";
        usernameInputField.style.fontSize = "15px";

        passwordLabel.style.fontSize = "12px";
        passwordInputField.style.width = "245px";
        passwordInputField.style.fontSize = "15px";
        showPasswordButton.style.marginLeft = "1.1vw";

        confirmPasswordLabel.style.fontSize = "12px";
        confirmPasswordInputField.style.width = "245px";
        confirmPasswordInputField.style.fontSize = "15px";
        showConfirmPasswordButton.style.marginLeft = "1.1vw";

        invalidCredentialsLabel.style.fontSize = "0.9vw";

        signUpButton.style.width = "17vw";
        
        redirectToLoginPageButton.style.marginTop = "-1.1vw";
        redirectToLoginPageButton.style.marginLeft = "7vw";

    } else {
        sideImage.style.display = "block";

        emailLabel.style.fontSize = "12px";
        emailLabel.style.width = "190px";
        emailInputField.style.width = "100%";

        usernameLabel.style.fontSize = "12px";
        usernameLabel.style.width = "190px";
        usernameInputField.style.width = "100%";

        passwordLabel.style.fontSize = "12px";
        passwordLabel.style.width = "190px";
        passwordInputField.style.width = "100%";
        showPasswordButton.style.marginLeft = "1vw";

        confirmPasswordLabel.style.fontSize = "12px";
        confirmPasswordLabel.style.width = "190px";
        confirmPasswordInputField.style.width = "100%";
        showConfirmPasswordButton.style.marginLeft = "1vw";

        invalidCredentialsLabel.style.width = "17vw";
        invalidCredentialsLabel.style.fontSize = "0.8vw";

        signUpButton.style.width = "17vw";
        
        redirectToLoginPageButton.style.marginTop = "-0.9vw";
        redirectToLoginPageButton.style.marginLeft = "5vw";
    }
}

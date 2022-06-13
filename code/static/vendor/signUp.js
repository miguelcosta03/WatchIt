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

    function resizeLabels() {
        if (winWidth < 767) {
            emailLabel.style.fontSize = "10px";
            emailLabel.style.width = "150px";
            usernameLabel.style.fontSize = "10px";
            usernameLabel.style.width = "150px";
            passwordLabel.style.fontSize = "10px";
            passwordLabel.style.width = "150px"
            confirmPasswordLabel.style.fontSize = "10px";
            confirmPasswordLabel.style.width = "150px";
            signUpButton.style.width = "31vw";

        } else {
            emailLabel.style.fontSize = "11px";
            emailLabel.style.width = "150px";
            usernameLabel.style.fontSize = "11px";
            usernameLabel.style.width = "150px";
            passwordLabel.style.fontSize = "11px";
            passwordLabel.style.width = "150px"
            confirmPasswordLabel.style.fontSize = "11px";
            confirmPasswordLabel.style.width = "150px";
            signUpButton.style.width = "17vw";
        }
    }

    function resizeButtons() {
        if (winWidth < 767) {
            showPasswordButton.style.position = "absolute";
            showPasswordButton.style.marginLeft = "15vw";
            showConfirmPasswordButton.style.position = "absolute";
            showConfirmPasswordButton.style.marginLeft = "15vw";
            redirectToLoginPageButton.style.marginTop = "-1.1vw";
            redirectToLoginPageButton.style.marginTop = "2.5vw";
            redirectToLoginPageButton.style.marginLeft = "-1vw";
            
        } else {
            showPasswordButton.style.position = "absolute";
            showPasswordButton.style.marginLeft = "0.5vw";
            showConfirmPasswordButton.style.position = "absolute";
            showConfirmPasswordButton.style.marginLeft = "0.5vw";
            redirectToLoginPageButton.style.marginTop = "-1.1vw";
            redirectToLoginPageButton.style.marginLeft = "6vw";
        }
    }

    function resizeInputFields() {
        if (winWidth < 767) {
            emailInputField.style.width = "150px";
            usernameInputField.style.width = "150px";
            passwordInputField.style.width = "150px";
            confirmPasswordInputField.style.width = "150px";
        } else {
            emailInputField.style.width = "100%";
            usernameInputField.style.width = "100%";
            passwordInputField.style.width = "100%";
            confirmPasswordInputField.style.width = "100%";
        }
    }
    if (winWidth < 767) {
        sideImage.style.display = "none";
        resizeLabels();
        resizeInputFields();
        resizeButtons();
    } else {
        sideImage.style.display = "block";
        resizeLabels();
        resizeInputFields();
        resizeButtons();
    }
}
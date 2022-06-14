function resizeWidgets() {
    let winWidth = window.innerWidth
    let emailInputField = document.getElementById('emailAddress');
    let passwordInputField = document.getElementById('password');
    let showPasswordButton = document.getElementById('psw_button');
    let sideImage = document.getElementById('sideImage');
    let redirectToSignUpPageButton = document.getElementById('redirectToSignUpPageButton');
    let loginButton = document.getElementById('loginButton');

    console.log(winWidth);

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
        
    } else if (winWidth >= 780 && winWidth < 1400) {
        redirectToSignUpPageButton.style.marginTop = "2vw";
        redirectToSignUpPageButton.style.marginLeft = "-0.5vw";

    } else if (winWidth >= 1400 && winWidth < 1720) {
        redirectToSignUpPageButton.style.marginTop = "-1vw";
        redirectToSignUpPageButton.style.marginLeft = "7vw";
    }
    else {
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

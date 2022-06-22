function showHidePassword() {
    pswField = document.getElementById('password');
    pswButton = document.getElementById('psw_button');

    if (pswField.type === 'password') {
        pswField.type = 'text';
        pswButton.style.backgroundImage = "url('/static/images/other_images/password_visible.png')";
    } else {
        pswField.type = 'password';
        pswButton.style.backgroundImage = "url('/static/images/other_images/password_invisible.png')";
    }
}

function showHideConfirmPassword() {
    confPswField = document.getElementById('confirmPassword');
    confPswButton = document.getElementById('conf_psw_button');
    
    if (confPswField.type === 'password') {
        confPswField.type = 'text';
        confPswButton.style.backgroundImage = "url('/static/images/other_images/password_visible.png')";
    } else {
        confPswField.type = 'password';
        confPswButton.style.backgroundImage = "url('/static/images/other_images/password_invisible.png')";
    }
}
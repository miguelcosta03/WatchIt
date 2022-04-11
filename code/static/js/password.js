function showHidePassword() {
    pswField = window.document.getElementById('password');
    confPswField = window.document.getElementById('confirm_password');
    pswButton = window.document.getElementById('psw_button');
    confPswButton = window.document.getElementById('conf_psw_button');
    if (pswField.type === 'password') {
        pswField.type = 'text';
        confPswField.type = 'text';
        pswButton.style.backgroundImage = "url('/static/images/other_images/password_visible.png')";
        confPswButton.style.backgroundImage = "url('/static/images/other_images/password_visible.png')";
    } else {
        pswField.type = 'password';
        confPswField.type = 'password';
        pswButton.style.backgroundImage = "url('/static/images/other_images/password_invisible.png')";
        confPswButton.style.backgroundImage = "url('/static/images/other_images/password_invisible.png')";
    }
}
function showHidePassword() {
    pswField = window.document.getElementById('password')
    confPswField = window.document.getElementById('confirm_password')
    if (pswField.type === 'password') {
        pswField.type = 'text'
        confPswField.type = 'text'
    } else {
        pswField.type = 'password'
        confPswField.type = 'password'
    }
}
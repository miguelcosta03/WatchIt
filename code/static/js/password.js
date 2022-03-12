function showHidePassword() {
    pswField = window.document.getElementById('password')
    if (pswField.type === 'password') {
        pswField.type = 'text'
    } else {
        pswField.type = 'password'
    }
}
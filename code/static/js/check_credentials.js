function checkEmail() {
    let emailAddress = document.getElementById('emailAddress').value
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel')
    if (emailAddress.length > 0) {
        let validateEmail = (email) => {
            var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            return emailRegex.test(email)
        }
        if (validateEmail(emailAddress) == true) {
            invalidCredentialsLabel.style.display = "none"
            
        } else {
            invalidCredentialsLabel.style.display = "block"
            invalidCredentialsLabel.innerHTML = "* Email Inválido."
            console.log('Email Invalido')
        }
    } else {
        invalidCredentialsLabel.innerHTML = "* Por favor insira o um email."
    }
}

function checkPassword() {
    let password = document.getElementById('password').value
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel')
    if(password.length > 0 ) {
        invalidCredentialsLabel.style.display = "none"
    } else {
        invalidCredentialsLabel.style.display = "block"
        invalidCredentialsLabel.style.marginLeft= "1vw"
        invalidCredentialsLabel.innerHTML = "* Por favor insira uma password."
    }
}
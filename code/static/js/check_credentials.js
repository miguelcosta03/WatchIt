function checkEmail() {
    let emailAddress = document.getElementById('emailAddress').value;
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel');
    if (emailAddress.length > 0) {
        let validateEmail = (email) => {
            var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return emailRegex.test(email);
        }
        if (validateEmail(emailAddress) == true) {
            invalidCredentialsLabel.style.display = "none";
            
        } else {
            invalidCredentialsLabel.style.display = "block";
            invalidCredentialsLabel.innerHTML = "* Email Inválido.";
        }
    } else {
        invalidCredentialsLabel.innerHTML = "* Por favor insira o um email.";
    }
}

function checkUsername() {
    let username = document.getElementById('username').value;
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel');
    if (username.length > 0) {
        let validateUsername = (username) => {
            usernameRegex = /^[a-zA-Z\-]+$/;
            return usernameRegex.test(username);
        }
        if (validateUsername(username) == true) {
            invalidCredentialsLabel.style.display = "none";
        } else {
            invalidCredentialsLabel.style.display = "block";
            invalidCredentialsLabel.innerHTML = "* Username Inválido.";
        }
    } else {
        invalidCredentialsLabel.innerHTML = "* Por favor insira um nome de utilizador."
    }
}

function checkPassword() {
    let password = document.getElementById('password').value;
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel');
    if (password.length > 0) {
        invalidCredentialsLabel.style.display = "none";
    } else {
        invalidCredentialsLabel.style.display = "block";
        invalidCredentialsLabel.style.marginLeft= "1vw";
        invalidCredentialsLabel.innerHTML = "* Por favor insira uma password.";
    }
}

function checkConfirmPassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let invalidCredentialsLabel = document.getElementById('invalidCredentialsLabel');
    if (confirmPassword.length > 0) {
        if (password == confirmPassword) {
            invalidCredentialsLabel.style.display = "none";
        } else {
            invalidCredentialsLabel.style.display = "block";
            invalidCredentialsLabel.innerHTML = "* As passwords não correspondem."
        }
    } else {
        invalidCredentialsLabel.style.display = "block";
        invalidCredentialsLabel.innerHTML = "* Por favor confirme a sua password.";
    }
}
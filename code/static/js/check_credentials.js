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

function checkNewUsername() {
    let newUsername = document.getElementById('newUsername').value;
    let newUsernameInput = document.getElementById('newUsername');
    let invalidUsernameLabel = document.getElementById('invalidUsernameLabel');
    if (newUsername.length > 0) {
        invalidUsernameLabel.style.display = "none";
        let validateNewUsername = (newUsername) => {
            newUsernameRegex = /^[a-zA-Z\-]+$/;
            return newUsernameRegex.test(newUsername);
        }
        if (validateNewUsername(newUsername) == true) {
            invalidUsernameLabel.style.display = "none";
        } else {
            newUsernameInput.style.borderColor = "red";
            invalidUsernameLabel.style.display = "block";
            invalidUsernameLabel.innerHTML = "* Username Inválido."
        }
    } else {
        newUsernameInput.style.borderColor = "red";
        invalidUsernameLabel.style.display = "block";
        invalidUsernameLabel.innerHTML = "* Por favor insira um nome de utilizador.";
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

function checkNewEmail() {
    let newEmailInput = document.getElementById('newEmail');
    let invalidEmailLabel = document.getElementById('invalidEmailLabel');
    if (newEmailInput.value.length > 0) {
        let validateNewEmail = (newEmail) => {
            newEmailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return newEmailRegex.test(newEmail);
        }
        if (validateNewEmail(newEmailInput) == true) {
            invalidEmailLabel.style.display = "none";
        } else {
            invalidEmailLabel.style.display = "block";
            invalidEmailLabel.innerHTML = "* Email Inválido."
            newEmailInput.style.borderColor = "red";
        }
    } else {
        invalidEmailLabel.style.display = "block";
        invalidEmailLabel.innerHTML = "* Por favor insira um email."
        newEmailInput.style.borderColor = "red";
    }
}
function resizeWidgets() {
    let winWidth = window.innerWidth;
    let editProfileBox = document.getElementById('editProfileBox');
    let profileImage = document.getElementById('profileImage');
    let usernameTitle = document.getElementById('usernameTitle');
    let usernameLabel = document.getElementById('usernameLabel');
    let editableUsername = document.getElementById('editableUsername');
    let editUsernameButton = document.getElementById('editUsernameButton');
    let newUsernameInput = document.getElementById('newUsername');
    let saveNewUsernameButton = document.getElementById('saveNewUsernameButton');
    let invalidUsernameLabel = document.getElementById('invalidUsernameLabel');

    let emailLabel = document.getElementById('emailLabel');
    let editableEmail = document.getElementById('editableEmail');
    let editEmailButton = document.getElementById('edit-email-button');
    let newEmailInput = document.getElementById('newEmail');
    let saveNewEmailButton = document.getElementById('saveNewEmailButton');
    let invalidEmailLabel = document.getElementById('invalidEmailLabel');

    let passwordLabel = document.getElementById('passwordLabel');
    let changePasswordButton = document.getElementById('changePasswordButton');

    console.log(winWidth);

    if (winWidth < 800) {
        editProfileBox.style.width = "97.8vw";
        editProfileBox.style.marginLeft = "1vw";

        usernameTitle.style.fontSize = "3vw";
        usernameLabel.style.fontSize = "2.5vw";
        editUsernameButton.style.position = "absolute";
        editUsernameButton.style.marginTop = "-6vw";
        editUsernameButton.style.marginLeft = "5vw";
        editableUsername.style.fontSize = "2.2vw";
        newUsernameInput.style.height = "5vw";
        newUsernameInput.style.width = "35vw";
        newUsernameInput.style.fontSize = "3vw";
        saveNewUsernameButton.style.height = "5vw";
        saveNewUsernameButton.style.width = "35vw";
        saveNewUsernameButton.style.fontSize = "2.2vw";
        invalidUsernameLabel.style.width = "25vw";
        invalidUsernameLabel.style.marginLeft = "1vw";
        invalidUsernameLabel.style.fontSize = "2.3vw";

        emailLabel.style.fontSize = "2.5vw";
        editableEmail.style.width = "3vw";
        editableEmail.style.fontSize = "2.2vw";
        editEmailButton.style.position = "absolute";
        editEmailButton.style.marginTop = "-6vw";
        editEmailButton.style.marginLeft = "5vw";
        newEmailInput.style.height = "5vw";
        newEmailInput.style.width = "35vw";
        newEmailInput.style.fontSize = "2.5vw";
        saveNewEmailButton.style.width = "35vw";
        saveNewEmailButton.style.height = "5vw";
        saveNewEmailButton.style.fontSize = "2.2vw";
        invalidEmailLabel.style.width = "20vw";
        invalidEmailLabel.style.marginLeft = "1vw";
        invalidEmailLabel.style.fontSize = "2.3vw";

        passwordLabel.style.fontSize = "2.5vw";
        changePasswordButton.style.height = "5vw";
        changePasswordButton.style.fontSize = "2vw";

    } else if (winWidth >= 800) {
        editProfileBox.style.width = "50vw";
        editProfileBox.style.marginLeft = "25vw";

        profileImage.style.width = "5vw";

        usernameTitle.style.fontSize = "1.5vw";
        usernameTitle.style.marginTop = "-5vw";
        usernameTitle.style.marginLeft = "6.5vw";
        usernameLabel.style.fontSize = "1vw";
        usernameLabel.style.marginTop = "2.5vw"
        usernameLabel.style.marginLeft = "0vw";
        editUsernameButton.style.position = "absolute";
        editUsernameButton.style.marginTop = "-1.8vw";
        editUsernameButton.style.marginLeft = "1.8vw";
        editableUsername.style.fontSize = "1vw";

        newUsernameInput.style.height = "2vw";
        newUsernameInput.style.width = "10vw";
        newUsernameInput.style.fontSize = "1vw";
        saveNewUsernameButton.style.height = "2vw";
        saveNewUsernameButton.style.width = "10vw";
        saveNewUsernameButton.style.fontSize = "1vw";
        invalidUsernameLabel.style.width = "10vw";
        invalidUsernameLabel.style.marginLeft = "1vw";
        invalidUsernameLabel.style.fontSize = "1vw";

        emailLabel.style.fontSize = "1vw";
        editableEmail.style.width = "3vw";
        editableEmail.style.fontSize = "1vw";
        editEmailButton.style.position = "absolute";
        editEmailButton.style.marginTop = "-1.7vw";
        editEmailButton.style.marginLeft = "0vw";
        newEmailInput.style.height = "2vw";
        newEmailInput.style.width = "13.5vw";
        newEmailInput.style.fontSize = "1vw";
        saveNewEmailButton.style.width = "13.5vw";
        saveNewEmailButton.style.height = "2vw";
        saveNewEmailButton.style.fontSize = "1vw";
        invalidEmailLabel.style.width = "10vw";
        invalidEmailLabel.style.marginLeft = "1vw";
        invalidEmailLabel.style.fontSize = "1vw";

        passwordLabel.style.fontSize = "1vw";
        changePasswordButton.style.height = "2vw";
        changePasswordButton.style.fontSize = "1vw";
    }
}
function showHideNewUsername() {
    let editButton = document.getElementById('edit-username-button')
    let usernameDiv = document.getElementById('new-username-div')
    if (usernameDiv.style.display === "block") {
        usernameDiv.style.display = "none"
    } else {
        usernameDiv.style.display = "block"
    }
}
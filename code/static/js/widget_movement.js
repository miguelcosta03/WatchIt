function moveProfilePanel() {
    let winWidth = window.innerWidth;
    let dropdownContent = document.getElementById('dropdownContent');
    if (winWidth < 768) {
        dropdownContent.style.marginLeft = "0.1vw";
        dropdownContent.style.marginTop = "9.7vw";
        dropdownContent.style.height = "21.3vw";
    } else {
        dropdownContent.style.marginLeft = "-5.1vw";
        dropdownContent.style.marginTop = "2.4vw";
        dropdownContent.style.height = "5.5vw";
    }
}
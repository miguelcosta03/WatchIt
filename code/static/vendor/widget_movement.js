function moveProfilePanel() {
    let winWidth = window.innerWidth;
    let dropdownContent = document.getElementById('dropdownContent');
    if (winWidth < 767){
        dropdownContent.style.position = "fixed";
        dropdownContent.style.marginTop = "48px";
        dropdownContent.style.marginLeft = "0px";
        dropdownContent.style.height = "107px";
    } else {
        dropdownContent.style.position = "absolute";
        dropdownContent.style.marginTop = "90%";
        dropdownContent.style.marginLeft = "-100px";
        dropdownContent.style.height = "107px";
    }
}
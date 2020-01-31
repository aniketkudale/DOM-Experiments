document.addEventListener("DOMContentLoaded", run);

function run() {
    document.getElementById('default-open').click();
}

function tabOpen(event) {
    var i;
    var tabLinks = document.getElementsByClassName('tabLinks');
    var tabContent = document.getElementsByClassName('tab-content');

    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        tabContent[i].style.display = "none";
    }

    document.getElementById(event.currentTarget.textContent.toLowerCase()).style.display = "block";
    document.getElementById(event.currentTarget.textContent.toLowerCase()).style.transition = "display";

    event.currentTarget.className += " active";
}
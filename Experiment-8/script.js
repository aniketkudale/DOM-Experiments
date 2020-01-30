document.addEventListener('DOMContentLoaded', load);

function load() {
    document.getElementById('defaultOpen').click();
}

function openTab(event) {
    var i;
    var tablinks = document.getElementsByClassName('tablinks');
    var tabContent = document.getElementsByClassName('tab-content');

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
        tabContent[i].style.display = "none";
    }

    document.getElementById(event.currentTarget.textContent.toLowerCase()).style.display = "block";
    document.getElementById(event.currentTarget.textContent.toLowerCase()).style.transition = "display ";

    event.currentTarget.className += ' active';
}
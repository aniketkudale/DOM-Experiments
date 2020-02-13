function openTab(city, ev, color) {
    var i, tabLink, tabContent;

    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLink = document.getElementsByClassName('tab-links');
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].style.backgroundColor = "";
    }

    document.getElementById(city).style.display = "block";

    ev.style.backgroundColor = color;
}

document.getElementsByClassName('tab-links')[0].click();
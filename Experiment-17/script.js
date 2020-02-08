var showEnabled = false;

function showMore() {
    if (!showEnabled) {
        document.getElementById('more').style.display = "inline";
        document.getElementById('dots').style.display = "none";
        document.getElementById('show-more').innerHTML = "Show less";
        showEnabled = true;
    } else {
        document.getElementById('more').style.display = "none";
        document.getElementById('dots').style.display = "inline"
        document.getElementById('show-more').innerHTML = "Show more";
        showEnabled = false;
    }
}
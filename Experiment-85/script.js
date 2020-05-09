window.onscroll = function() {
    scrollIndicator();
}

function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var clientHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / clientHeight) * 100;
    document.getElementById('myBar').style.width = scrolled + "%";
}
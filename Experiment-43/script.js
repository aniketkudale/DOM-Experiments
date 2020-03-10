window.onscroll = function() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementsByClassName('nav-bar')[0].style.top = "-42px";
    } else {
        document.getElementsByClassName('nav-bar')[0].style.top = "0px";
    }
}
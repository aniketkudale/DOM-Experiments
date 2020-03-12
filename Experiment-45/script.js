var navBar = document.getElementsByClassName('nav-bar')[0];
var navBarOffset = navBar.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= navBarOffset) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
}
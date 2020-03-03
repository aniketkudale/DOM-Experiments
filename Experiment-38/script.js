function toggle() {
    var x = document.getElementsByClassName('nav-bar')[0];
    if (x.className == 'nav-bar') {
        x.className += ' responsive';
    } else {
        x.className = 'nav-bar';
    }
}
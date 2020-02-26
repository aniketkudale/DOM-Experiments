function toggleNav() {
    if (document.getElementById('mySideNav').style.width == '') {
        document.getElementById('mySideNav').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    } else {
        document.getElementById('mySideNav').style.width = '';
        document.getElementById('main').style.marginLeft = '';
    }
}
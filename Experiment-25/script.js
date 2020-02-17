function showMenu() {
    var menu = document.getElementById('nav-menu');
    if (menu.className === "top-nav") {
        menu.className += " responsive";
    } else {
        menu.className = "top-nav";
    }
}
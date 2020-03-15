function showDrop() {
    var dropContent = document.getElementsByClassName('dropdown-content')[0];
    dropContent.classList.toggle('show');
}

window.onclick = function(e) {
    if(!e.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for(i = 0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
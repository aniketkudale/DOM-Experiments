var input = document.getElementById('myInput');
var warning = document.getElementsByClassName('warning')[0];

input.addEventListener('keyup', function() {
    if(event.getModifierState("CapsLock")) {
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }
});
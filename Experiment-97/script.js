function toggle() {
    var toggleText = document.getElementById('heading');
    if(toggleText.innerText == 'Hello') {
        toggleText.innerText = 'World';
    } else {
        toggleText.innerText  = 'Hello';
    }
}
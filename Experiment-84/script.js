function submit() {
    alert('Hello World');
}

const input = document.getElementById('myInput');
input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit();
    }
});
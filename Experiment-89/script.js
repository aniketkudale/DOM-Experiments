var slider = document.getElementById('myRange');

slider.oninput = function() {
    document.getElementById('value').innerText = slider.value;
}
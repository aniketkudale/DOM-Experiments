window.addEventListener('DOMContentLoaded', load);

function load() {
    var bodyTag = document.getElementsByTagName('body')[0];
    var toolTipTag = document.getElementById('tool-tip');
    var x_coords = 0, y_coords = 0;
    bodyTag.addEventListener('mousemove', function(e) {
        x_coords = e.clientX;
        y_coords = e.clientY;
        toolTipTag.style.left = x_coords + "px";
        toolTipTag.style.top = y_coords + "px";
        toolTipTag.innerHTML = x_coords + ", " + y_coords;
    });
}
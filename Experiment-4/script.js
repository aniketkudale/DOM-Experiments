var accd = document.getElementsByClassName('accordian');
var i;

for (i = 0; i < accd.length; i++) {
    accd[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 50 + "px";
        }
    });
}
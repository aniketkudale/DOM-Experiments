document.addEventListener("DOMContentLoaded", function () {
    var aTag = document.getElementsByTagName('a');
    for (var i = 0; i < aTag.length; i++) {
        aTag[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.className += "active";
        });
    }
});
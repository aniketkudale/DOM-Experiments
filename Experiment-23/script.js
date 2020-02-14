window.addEventListener("DOMContentLoaded", run);

function run() {
    console.log("run");
    var aTag = document.getElementsByTagName('a');
    for (var i = 0; i < aTag.length; i++) {
        aTag[i].addEventListener("click", function(ev) {
            setActiveClass(aTag, ev);
        });
    }
}

function setActiveClass(aTag, ev) {
    for (var i = 0; i < aTag.length; i++) {
        aTag[i].classList.remove("active");
    }
    ev.target.classList.add("active");
}
function search() {
    var filter, li, aTag, i;
    filter = document.getElementById("mySearch").value.toLowerCase();
    li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        if (li[i].innerText.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
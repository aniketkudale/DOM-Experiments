window.onscroll = function() {
    if (document.body.scrollTop > 80 || this.document.documentElement.scrollTop > 80) {
        this.document.getElementsByClassName('navbar')[0].style.padding = "30px 10px";
        this.document.getElementsById('logo').style.fontSize = "25px";
    } else {
        this.document.getElementsByClassName('navbar')[0].style.padding = "90px 10px";
        this.document.getElementsById('logo').style.fontSize = "35px";
    }
}
var drpdwn = document.getElementsByClassName('drop-btn');
var i;

for (i = 0; i < drpdwn.length; i++) {
    drpdwn[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var drpdowns = this.nextElementSibling;
        drpdowns.classList.toggle('show');
    })
}
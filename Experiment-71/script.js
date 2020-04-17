window.addEventListener('DOMContentLoaded', function() {
    myBtn = document.getElementsByClassName('btn')[0];

    window.onscroll = function() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    };
    
    myBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});


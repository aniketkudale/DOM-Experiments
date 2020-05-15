var star = document.getElementsByClassName('star');

for(var i=0; i<star.length; i++) {
    (function(index) {
        star[i].addEventListener('click', function(e) {
            console.log(e, index);
            for(var j=0; j<star.length; j++) {
                if(star[j].classList.contains('checked')) {
                    star[j].classList.remove('checked');
                }   
            }
            for(var j=0; j<=index; j++) {
                if(star[j].classList.contains('checked')) {
                    star[j].classList.remove('checked');
                    star[j].classList.add('checked');
                } else {
                    star[j].classList.add('checked');
                }   
            }
        });
    })(i);    
}
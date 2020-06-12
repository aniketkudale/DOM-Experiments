function myFunction(x) {
    if(x.matches) {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "#0081cb";
    }
}

 var x = window.matchMedia("(max-width: 700px)");
 myFunction(x);
 x.addListener(myFunction);
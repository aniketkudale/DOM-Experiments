var rows  = document.getElementsByClassName('rows');
var container = document.getElementsByClassName('container');
var sizeParam = 'h=480&w=640';

rows[0].addEventListener('click', function(e) {
  container[0].classList.add('animate-custom');
  setTimeout(() => {  container[0].classList.remove('animate-custom');
}, 1000);
  var generatedURL = e.target.currentSrc.slice(0, -11) + sizeParam;
  container[0].children[0].src = generatedURL;  
});

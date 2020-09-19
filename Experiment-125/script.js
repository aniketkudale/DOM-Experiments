//Event Delegation

document.addEventListener('click', function(e) {
  if(e.target.classList.contains('blur')) {
    e.target.classList.remove('blur');
  } else {
    e.target.classList.add('blur');
  }
});
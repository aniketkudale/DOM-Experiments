let close = document.getElementsByClassName('close')[0];
let modal = document.getElementById('myModal');
let img = document.getElementById('myImg');
let imgContent = document.getElementById('img01');
modal.style.display = 'none';

img.addEventListener('click', function() {
  modal.style.display = 'block';
  imgContent.setAttribute('src', img.getAttribute('src'));
  document.getElementById('caption').innerText = img.getAttribute('alt');
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});


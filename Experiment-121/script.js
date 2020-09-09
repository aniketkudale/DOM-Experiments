let colorInput = document.getElementById('color-input');
let defaultValue = '#0081cb';
let colorDivs = document.getElementsByClassName('color-div');

function loadDefault(color) {
  colorInput.style.border = '2px solid ' + color;
    for(let i=0; i<colorDivs.length; i++) {
      colorDivs[i].style.backgroundColor = color;
      colorDivs[i].style.opacity = (i / 100)
    }
}

loadDefault(defaultValue);

colorInput.addEventListener('keyup', 
   debounce(renderShades, 500)
);

function renderShades() {
    if(colorInput.value === '') colorInput.value = 'BLUE';
    colorInput.style.border = '2px solid ' + colorInput.value;
  for(let i=0; i<colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = colorInput.value;
    colorDivs[i].style.opacity = (i / 100);
  }
}

function debounce(func, delay) {
  let timerSetting;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timerSetting);
    timerSetting = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}
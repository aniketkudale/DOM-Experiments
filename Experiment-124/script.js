const debounce_canvas = document.getElementById('debounce_canvas');
const debounce_context = debounce_canvas.getContext('2d');

const throttle_canvas = document.getElementById('throttle_canvas');
const throttle_context = throttle_canvas.getContext('2d');

let debounce_i = 0;
let throttle_i = 0;


debounce_canvas.addEventListener('mousewheel',
  debounce(drawDebounceLine, 500)
);

debounce_canvas.addEventListener('mousewheel', function(e) {
  e.preventDefault();
});

throttle_canvas.addEventListener('mousewheel',
  throttle(drawThrottleLine, 500)
);

throttle_canvas.addEventListener('mousewheel', function(e) {
  e.preventDefault();
});

function drawDebounceLine() {
  debounce_i += 10;
  debounce_context.beginPath(); 
  debounce_context.moveTo(debounce_i,0);
  debounce_context.lineTo(debounce_i,260);
  debounce_context.stroke()
  w = '100%';
  h = '100%';
  if ( debounce_i > 1023) {
    debounce_context.clearRect(0, 0, 1024, 260);
    debounce_i =0;
  }
}

function drawThrottleLine() {
  throttle_i += 10;
  throttle_context.beginPath(); 
  throttle_context.moveTo(throttle_i,0);
  throttle_context.lineTo(throttle_i,260);
  throttle_context.stroke()
  w = '100%';
  h = '100%';
  if ( throttle_i > 1023) {
    throttle_context.clearRect(0, 0, 1024, 260);
    throttle_i =0;
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

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

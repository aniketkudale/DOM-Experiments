function start() {
    var bar = document.getElementById('progress-bar');
    var count = 0;
    setInterval(function() {
        count += 10;
        if (count < 100) {
            bar.style.width = count + 10 + '%';
        }
    }, 1000);
}
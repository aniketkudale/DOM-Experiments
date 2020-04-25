function copy() {
    var text = document.getElementById('myInput');
    text.select();
    document.execCommand('copy');
    alert('Copied: ' + text.value);
}
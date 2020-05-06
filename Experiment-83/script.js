function showPassword() {
    var pass = document.getElementById('pass');
    if (pass.type == 'text') {
        pass.type = 'password';
    } else {
        pass.type = 'text';
    }
}
function toggleSpell() {
    var spellCtrl = document.getElementById('summary');
    if(spellCtrl.getAttribute('spellcheck') == 'true') {
        spellCtrl.setAttribute('spellcheck', false);
    } else {
        spellCtrl.setAttribute('spellcheck', true);
    }
}
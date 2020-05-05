function toggleAutoComplete() {
    var spellCtrl = document.getElementById('name');
    if(spellCtrl.getAttribute('autocomplete') == 'true') {
        spellCtrl.setAttribute('autocomplete', false);
    } else {
        spellCtrl.setAttribute('autocomplete', true);
    }
}
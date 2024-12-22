
// Aggiungi una transizione per una sezione in più (es. uno scroll smooth)
document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('#collection').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
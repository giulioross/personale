
// Aggiungi una transizione per una sezione in più (es. uno scroll smooth)
document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('#collection').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
// Ottieni tutti i prodotti nella sezione 'trend'
const products = document.querySelectorAll('.trend .product');

// Aggiungi un event listener a ciascun prodotto
products.forEach(product => {
    product.addEventListener('click', function() {
        // Seleziona l'immagine all'interno del prodotto cliccato
        const img = product.querySelector('img');
        
        
        // Aggiungi la classe 'rotate' per far girare l'immagine
        img.classList.toggle('rotate');

        // Facoltativo: Se vuoi far tornare l'immagine alla posizione iniziale dopo un po' di tempo, rimuovi la classe
        setTimeout(() => {
            img.classList.remove('rotate');
        }, 1000); // 1000 ms (1 secondo) dopo il click
    });
});
const login=document.getElementById('login').onclick=function () {
    window.location.href='login.html'
}
// Ottieni il bottone
const button = document.getElementById('nightModeToggle');

// Aggiungi un evento al bottone
button.addEventListener('click', function() {
    // Toggle della classe 'night-mode' sul body
    document.body.classList.toggle('night-mode');

});

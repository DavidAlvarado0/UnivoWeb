// Agregar interactividad para alternar expansión al hacer clic
document.querySelectorAll('.generalidades .card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

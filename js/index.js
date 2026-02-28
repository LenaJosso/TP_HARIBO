// On attend que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {

    // Gestion du clic sur TOUS les boutons Plus
    document.querySelectorAll('.btn-plus').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const input = document.getElementById('qty-' + type);
            input.value = parseInt(input.value) + 1;
        });
    });

    // Gestion du clic sur TOUS les boutons Moins
    document.querySelectorAll('.btn-moins').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const input = document.getElementById('qty-' + type);
            let valeur = parseInt(input.value);

            // On vérifie que la quantité ne descend pas en dessous de 0
            if (valeur > 0) {
                input.value = valeur - 1;
            }
        });
    });

});

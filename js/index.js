document.addEventListener('DOMContentLoaded', function() {

    // 4) Création des 2 objets obligatoires
    const chamallows = {
        nom: "Chamallows",
        prix: 2.28,
        poids: 100,
        unite: "g",
        fichier: "images/chamallows.jpg"
    };

    const dragibus = {
        nom: "Dragibus",
        prix: 1.64,
        poids: 300,
        unite: "g",
        fichier: "images/dragibus.jpg"
    };

    // Stockage pour accès facile
    const produits = {
        "chamallows": chamallows,
        "dragibus": dragibus
    };

    // 5) Fonction pour mettre à jour l'affichage des calculs
    function mettreAJourDetail(type) {
        const produit = produits[type];
        const quantite = parseInt(document.getElementById('qty-' + type).value);
        const divInfo = document.getElementById('info-' + type);

        if (quantite > 0) {
            const prixTotal = (produit.prix * quantite).toFixed(2);
            const poidsTotal = produit.poids * quantite;

            divInfo.style.display = "block";
            divInfo.innerHTML = `
                <p>${quantite} paquets de ${produit.nom}</p>
                <p>Prix total = ${prixTotal} €</p>
                <p>Poids total = ${poidsTotal} ${produit.unite}</p>
            `;
        } else {
            divInfo.style.display = "none";
        }
    }

    // Gestion des clics (Réutilisation de la logique précédente)
    document.querySelectorAll('.btn-plus').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const input = document.getElementById('qty-' + type);
            input.value = parseInt(input.value) + 1;
            mettreAJourDetail(type); // Mise à jour auto
        });
    });

    document.querySelectorAll('.btn-moins').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const input = document.getElementById('qty-' + type);
            let valeur = parseInt(input.value);
            if (valeur > 0) {
                input.value = valeur - 1;
                mettreAJourDetail(type); // Mise à jour auto
            }
        });
    });
});

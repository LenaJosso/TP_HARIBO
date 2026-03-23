document.addEventListener('DOMContentLoaded', function() {
// tableau chamallows seul
    const chamallows = {
        nom: "Chamallows",
        prix: 2.28,
        poids: 100,
        unite: "g",
        fichier: "images/chamallows.jpg"
    };
// tableau dragibus seul
    const dragibus = {
        nom: "Dragibus",
        prix: 1.64,
        poids: 300,
        unite: "g",
        fichier: "images/dragibus.jpg"
    };
//tableau recap de tous les bonbons
    const produits = {
        "chamallows": chamallows,
        "dragibus": dragibus,
    };


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
//todo changer les 2 methodes doivent passe par des classes pas des ID
    //Gestion bouton +
    document.querySelectorAll('.btn-plus').forEach(button => {
        button.addEventListener('click', function() { //Quand on clique on ajoute 1
            const type = this.getAttribute('data-type');
            const input = document.getElementById('qty-' + type);
            input.value = parseInt(input.value) + 1;
            mettreAJourDetail(type);
        });
    });

    //Gestion bouton -
    document.querySelectorAll('.btn-moins').forEach(button => {
        button.addEventListener('click', function() { //Quand on clique on enleve 1 mais pas si c'est a 0
            const type = this.getAttribute('data-type');
            const input = document.getElementById('qty-' + type);
            let valeur = parseInt(input.value);
            if (valeur > 0) {
                input.value = valeur - 1;
                mettreAJourDetail(type);
            }
        });
    });
});

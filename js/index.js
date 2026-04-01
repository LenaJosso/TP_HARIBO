let chamallows = {
    nom: "Chamallows",
    prix: 2.28,
    poids: 100,
    quantite: 0,
    image: "images/chamallows.jpg"
};

let dragibus = {
    nom: "Dragibus",
    prix: 1.64,
    poids: 300,
    quantite: 0,
    image: "images/dragibus.jpg"
};

//normalement pour améliorer faudrait directement mettre les obj dans le tableaux pour eviter les
// repetition mais pas le temps
// faudrait tout faire avec classe pour mettre en correlation

let bonbons = [chamallows, dragibus];
function afficherPrixUnite() {
    let elements = document.getElementsByClassName('prixunite');
    for (let i = 0; i < bonbons.length; i++) {
        elements[i].innerHTML = "Prix à l'unité : " + bonbons[i].prix + " €";
    }
}

function calculerDetails() {
    for (let i = 0; i < bonbons.length; i++) {
        let p = bonbons[i];
        let totalPrix = p.quantite * p.prix;
        let totalPoids = p.quantite * p.poids;

        document.getElementById("nbpaquets" + (i + 1)).innerHTML = p.quantite + " paquets de " + p.nom;
        document.getElementById("pTotal" + (i + 1)).innerHTML = "Prix Total : " + totalPrix.toFixed(2) + " €";
        document.getElementById("poidsTotal" + (i + 1)).innerHTML = "Poids Total : " + totalPoids + " g";

    }
}

function partieCommande() {

    let totalPrix = 0;
    let totalPoids = 0;
    for (let i = 0; i < bonbons.length; i++) {
        totalPrix += bonbons[i].quantite * bonbons[i].prix;
        totalPoids += bonbons[i].quantite * bonbons[i].poids;
    }
    document.getElementById('prixTotal').innerHTML = "Prix Total : " + totalPrix.toFixed(2) + " €";
    document.getElementById('PoidsTotal').innerHTML = "Poids Total : " + totalPoids + " g";
    document.getElementById('paquetChamallows').innerHTML = chamallows.quantite + " paquets de " + chamallows.nom;
    document.getElementById('prixTotCham').innerHTML = "Prix Total : " + (chamallows.quantite * chamallows.prix).toFixed(2) + " €";
    document.getElementById('poidsTotCham').innerHTML = "Poids Total : " + (chamallows.quantite * chamallows.poids) + " g";
    document.getElementById('paquetDragibus').innerHTML = dragibus.quantite + " paquets de " + dragibus.nom;
    document.getElementById('prixtotaldragibus').innerHTML = "Prix Total : " + (dragibus.quantite * dragibus.prix).toFixed(2) + " €";
    document.getElementById('poidstotaldragibus').innerHTML = "Poids Total : " + (dragibus.quantite * dragibus.poids) + " g";
}

let btnPlus1 = document.getElementById('plusChamallows');
let btnMoins1 = document.getElementById('moinsChamallows');
let text1 = document.getElementById('text1');

btnPlus1.onclick = function () { //Changement avec on click et pas addEventListener
    chamallows.quantite++;
    text1.value = chamallows.quantite;
    calculerDetails();
    partieCommande();
};

btnMoins1.onclick = function () {
    if (chamallows.quantite > 0) {
        chamallows.quantite--;
        text1.value = chamallows.quantite;
        calculerDetails();
        partieCommande();
    }
};

let btnPlus2 = document.getElementById('plusDragibus');
let btnMoins2 = document.getElementById('moinsDragibus');
let text2 = document.getElementById('text2');

btnPlus2.onclick = function () {//Changement avec on click et pas addEventListener
    dragibus.quantite++;
    text2.value = dragibus.quantite;
    calculerDetails();
    partieCommande();
};

btnMoins2.onclick = function () {
    if (dragibus.quantite > 0) {
        dragibus.quantite--;
        text2.value = dragibus.quantite;
        calculerDetails();
        partieCommande();
    }
};

afficherPrixUnite();
calculerDetails();
partieCommande();
afficherImages();

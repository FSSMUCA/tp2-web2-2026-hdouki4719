// Déclaration des variables
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// calcul du sous-total
let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal, "MAD");

// appliquer la réduction seulement si codePromo n'est pas null et estMembre
let reduction = 0;
if (codePromo != null && estMembre) {
    reduction = sousTotal * (reductionPourcentage ?? 0) / 100;
}
console.log("Réduction :", reduction, "MAD");

//  calcul du total final
let totalFinal = sousTotal - reduction;
console.log("Total final :", totalFinal, "MAD");

//  vérifier si le solde est suffisant
let paiementAccepte = soldeCompte >= totalFinal;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

//  calcul du nouveau solde si paiement accepté
let nouveauSolde = paiementAccepte ? soldeCompte - totalFinal : soldeCompte;
if (paiementAccepte) {
    console.log("Nouveau solde :", nouveauSolde, "MAD");
}

//  récapitulatif final
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit ?? "N/A");
console.log("Quantité  :", quantite ?? 0);
console.log("Prix unit.:", prix ?? 0, "MAD");
console.log("Sous-total:", sousTotal, "MAD");
console.log("Réduction :", reduction, "MAD");
console.log("Total     :", totalFinal, "MAD");
console.log("Statut    :", paiementAccepte ? "Paiement accepté" : "Solde insuffisant");
console.log("Solde     :", nouveauSolde, "MAD");
console.log("=========================");
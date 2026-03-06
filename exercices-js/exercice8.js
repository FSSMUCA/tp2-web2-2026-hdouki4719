// Déclaration des variables initiales
let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// Traitement nom : trim + valeur par défaut si vide
nom = nom.trim();
if (nom === "") nom = "Inconnu";

// Traitement age : convertir en nombre entier et valider
age = parseInt(age);
let ageValide = !Number.isNaN(age) && age > 0;

// Traitement email : vérifier présence de "@" et "." après "@"
let positionArobase = email.indexOf("@");
let emailValide = positionArobase !== -1 && email.indexOf(".", positionArobase) !== -1;

// Traitement scoreJeu : extraire la partie numérique
scoreJeu = parseInt(scoreJeu);
if (Number.isNaN(scoreJeu)) scoreJeu = 0;

// Traitement estAdmin : conversion manuelle depuis string
estAdmin = estAdmin === "true";

// Traitement derniereConnexion : valeur par défaut si null/undefined
derniereConnexion = derniereConnexion ?? "Jamais connecté";

// Traitement nombreConnexions : convertir en nombre et afficher texte si 0
nombreConnexions = Number(nombreConnexions);
let nombreConnexionsAffichage = nombreConnexions === 0 ? "Aucune connexion" : nombreConnexions;

// Affichage du rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log("nom              :", `"${nom}" (corrigé : espaces supprimés)"`);
console.log("age              :", ageValide ? age : "valeur invalide", `(valide : ${ageValide})`);
console.log("email            :", `"${email}"`, `(valide : ${emailValide ? "oui" : "invalide : pas de point après @"})`);
console.log("scoreJeu         :", scoreJeu, `(extrait depuis "150pts")`);
console.log("estAdmin         :", estAdmin, `(attention : Boolean("false") = true, conversion manuelle requise)`);
console.log("derniereConnexion:", `"${derniereConnexion}" (valeur par défaut via ??)`);
console.log("nombreConnexions :", nombreConnexionsAffichage, `(0 après conversion)`); 
console.log("================================");
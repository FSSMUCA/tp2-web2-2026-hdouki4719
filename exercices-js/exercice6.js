
// Déclaration des variables
let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// utilisation de ??
console.log("=== Partie A : ?? ===");
console.log("nom    ?? 'valeur par défaut'   ->", nom ?? "valeur par défaut");
console.log("age    ?? 'valeur par défaut'   ->", age ?? "valeur par défaut");
console.log("ville  ?? 'valeur par défaut'   ->", ville ?? "valeur par défaut");
console.log("score  ?? 'valeur par défaut'   ->", score ?? "valeur par défaut");
console.log("actif  ?? 'valeur par défaut'   ->", actif ?? "valeur par défaut");

//  utilisation de ||
console.log("\n=== Partie B : || ===");
console.log("nom    || 'valeur par défaut'   ->", nom || "valeur par défaut");
console.log("age    || 'valeur par défaut'   ->", age || "valeur par défaut");
console.log("ville  || 'valeur par défaut'   ->", ville || "valeur par défaut");
console.log("score  || 'valeur par défaut'   ->", score || "valeur par défaut");
console.log("actif  || 'valeur par défaut'   ->", actif || "valeur par défaut");

//  comparaison des deux opérateurs
console.log("\n=== Partie C : comparaison ?? vs || ===");
console.log("nom    : ?? et || -> même résultat ? ", (nom ?? "valeur par défaut") === (nom || "valeur par défaut") ? "même résultat" : "résultat différent");
console.log("age    : ?? et || ->", (age ?? "valeur par défaut") === (age || "valeur par défaut") ? "même résultat" : "résultat différent");
console.log("ville  : ?? et || ->", (ville ?? "valeur par défaut") === (ville || "valeur par défaut") ? "même résultat" : "résultat différent");
console.log("score  : ?? et || ->", (score ?? "valeur par défaut") === (score || "valeur par défaut") ? "même résultat" : "résultat différent");
console.log("actif  : ?? et || ->", (actif ?? "valeur par défaut") === (actif || "valeur par défaut") ? "même résultat" : "résultat différent");
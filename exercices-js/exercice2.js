let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];
    let str = String(v);

    // Affiche "(chaine vide)"
    if (v === "") {
        str = "(chaine vide)";
    }

    // Vérifie 
    if (v) {
        console.log(str + " -> truthy");
    } else {
        console.log(str + " -> falsy");
    }
}
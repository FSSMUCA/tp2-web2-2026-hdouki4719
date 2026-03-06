// Définir les paires à tester
let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteurDiff = 0;

for (let i = 0; i < paires.length; i++) {
    let x = paires[i][0];
    let y = paires[i][1];

    let egalDouble = x == y;
    let egalTriple = x === y;

    if (egalDouble === true && egalTriple === false) {
        compteurDiff++;
    }

    // Affichage simple et lisible
    console.log(x + " == " + y + " -> " + egalDouble + " | " + x + " === " + y + " -> " + egalTriple);
}

console.log("---");
console.log(compteurDiff + " paire(s) où == et === donnent des résultats différents");
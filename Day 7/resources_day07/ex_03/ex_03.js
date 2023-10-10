function maCarte(maListe, maFonction) {
    let resultat = [];
    for(let i = 0; i < maListe.length; i++) {
        resultat.push(maFonction(maListe[i]));
    }
    return resultat;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(maCarte([5,8,10],isEven));

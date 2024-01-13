korttitaulukko = ["X", "X", "X", "X", "X", "X", "X", "X", "&hearts;"]
/* TO DO: sekoita korttitaulukko  */
let yritykset = 4;

function kaannaKortti(tapahtuma) {
    let kortti = tapahtuma.target;      // tämä hakee elementin, jota napsautettiin (tapahtuma-parametri tulee suoraan click-tapahtumalta)
    let indeksi = kortti.getAttribute("data-id") - 1;       // "data-id" on HTML-koodiin lisätty data-attribuutti (helpompi tapa kuin yrittää eristää numero id-attribuutista)
    kortti.innerHTML = korttitaulukko[indeksi];

    /* TO DO:
    - Jos pelaaja löysi sydämen, näytä viesti "Voitit!"
    - Muussa tapauksessa vähennä yritysten määrää yhdellä. Jos yrityksiä on jäljellä nolla, näytä viesti "Hävisit!".
    Muuten näytä jäljellä oleva yritysten määrä.
    - Jos pelaaja voitti tai hävisi, poista kaikki tapahtumakäsittelijät (vihje: samanlainen forEach-silmukka kuin niitä lisätessä)
    */

    kortti.removeEventListener("click", kaannaKortti);  // poista tapahtumakäsittelijä, jotta kortin voi kääntää vain kerran
}

// käy läpi kaikki kortit ja lisää niihin tapahtumankäsittelijät
document.querySelectorAll(".kortti").forEach(function (kortti) {
    kortti.addEventListener("click", kaannaKortti);
});
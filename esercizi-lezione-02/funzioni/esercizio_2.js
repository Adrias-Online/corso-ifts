/**
 * Scrivere una funzione che calcoli la somma dei primi N interi. 
 * Esempio:
 *   Input: 5
 *   Output: 15
 * N.B.
 * Opzionale scrivere una funzione ricorsiva.
 */

//funzione ricorsiva
function sommaInteri(intero) {
    if (intero <= 0) {
        return 0;
    } else {
        return (intero + sommaInteri(intero - 1));
    }
}

//funzione iterativa
function sommaInteriIterativa(valore){
    if (valore === 0){
        return 0;
    }

    var somma = 0;
    for (var i = 1; i <= valore; i++) {
        somma = somma + i; 
    }
    return somma;
}

console.log(sommaInteri(5));
console.log(sommaInteriIterativa(6));
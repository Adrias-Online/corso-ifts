/**
 * Scrivi una funzione che prenda in input un numero intero e 
 * restituisca 0 se è pari o 1 se è dispari.
 */
function isDispari(value){
    if (isNaN(value)){
        return null; // se non è un numero torno null
    }
    return value % 2;
}
console.log(isDispari(1));
console.log(isDispari(2));
console.log(isDispari(0));
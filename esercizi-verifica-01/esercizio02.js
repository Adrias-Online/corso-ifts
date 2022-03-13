/**
 * Scrivi una funzione che dato un numero di secondi, calcoli la quantità di ore, 
 * minuti e secondi corrispondenti e  poi stampi il risultato in console. 
 * L'output avrà solo numeri interi.   
 * Esempio:    
 *  Input: 54000   
 *  Output: 15 ore, 0 minuti e 0 secondi.
 */
function quanteOreMinutiSecondi(value){
    if (isNaN(value) || value <= 0){
        return null; //se non è un numero valido ritorno null o undefined
    }

    var ore = parseInt(value/(3600));
    var minuti = parseInt((value - (ore*3600))/60);
    var secondi = parseInt(value - (minuti * 60) - (ore * 3600));

    return ore + " ore, " + minuti + " minuti e " + secondi + " secondi.";
}

console.log(quanteOreMinutiSecondi(3660));

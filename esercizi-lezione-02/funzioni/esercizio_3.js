/**
 * Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è. Nel controllo scarta gli spazi e i segni di punteggiatura.
 *  Esempio:
 *    Input: i topi non avevano nipoti
 *    Output: true
 * Consigli:Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa 
 * chiamato replace, in questo modo: str.replace(/\W/g, "").
 */
 function checkPalindrome(stringa) {
    stringa = stringa.replace(/\W/g, "").toLowerCase();
    var lunghezza = stringa.length;
    if (lunghezza === 0){
        return true;
    }
    for (var i = 0; i < lunghezza / 2; i++) {
        if (stringa[i] !== stringa[lunghezza - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("i topi non avevano nipoti"));
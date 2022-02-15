/**
 * Scrivi un blocco di codice che dato un array di numeri, calcoli la media dei valori 
 * e restituisca in output la media e tutti i valori minori della media.
  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]
 */

var array = [3, 5, 6, 10, 2, 8];
var arrayMinori = [];
var totale = 0;
for (var i = 0; i < array.length; i++) {
    var elementoArray = array[i];
    totale = totale + elementoArray;
}

for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element < (totale/array.length )){
        arrayMinori.push(element); //push è la funzione della classe Array per aggiungere un elemento nella lista.
    }
}

console.log("media = " + totale/array.length + ", valori minori = [" + arrayMinori +"]");
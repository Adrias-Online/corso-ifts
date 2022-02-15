/**
 * Scrivere un blocco di codice Javascript che dato un numero stampi la tabellina corrispondente.
 */
var x = "";
var n = 5;
for(var i = 1; i <= 10; i++){
    x = x + " " + (i * n);
}
console.log(x);

/**
 * Come stampare tutte le tabelline da 1 a 10.
 */
for (var n = 1; n <= 10; n++){
    var x = "";
    for(var i = 1; i <= 10; i++){
        x = x + " " + (i * n);
    }
    console.log(x);
}
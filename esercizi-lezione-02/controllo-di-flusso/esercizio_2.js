/**
 * Scrivere un blocco di codice Javascript che stampi a console i primi dieci numeri interi, escluso lo zero, in lingua italiana.
 */

for (var i = 1; i<= 10; i++){
    var n = "";
    switch(i){
        case 1: n = "Uno"; break;
        case 2: n = "Due"; break; 
        case 3: n = "Tre"; break;
        case 4: n = "Quattro"; break;
        case 5: n = "Cinque"; break;
        case 6: n = "Sei"; break;
        case 7: n = "Sette"; break;
        case 8: n = "Otto"; break;
        case 9: n = "Nove"; break;
        case 10: n = "Dieci"; break;
    }
    console.log(n);
}
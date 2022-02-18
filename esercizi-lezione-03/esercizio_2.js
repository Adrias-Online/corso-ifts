/**
 * Scrivi la funzione isEmpty(obj) che ritorna true se l’oggetto non ha proprietà, altrimenti ritorna false.
 */
var objVuoto = {};
var objPieno = {"nome": "Giuseppe"};
function isEmpty(obj){
    for(var key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty(objVuoto)); //true
console.log(isEmpty(objPieno)); //false
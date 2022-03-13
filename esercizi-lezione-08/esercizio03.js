/**
 * Scrivere una funzione che abbia in input una stringa contenente un Json e 
 * restituisca in output l'oggetto contatto rappresentatto nel json.
 */

function contattoFromJson(value){
    if (value === ""){
        return null;
    }
    return JSON.parse(value);
}

var contattoJsonStr = "{\"nome\":\"Giulio\",\"cognome\":\"Rossi\",\"eta\":30}";
let contatto = contattoFromJson(contattoJsonStr);
console.dir(contatto);
console.log(contatto.eta);
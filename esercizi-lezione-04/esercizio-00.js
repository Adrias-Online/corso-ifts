/**
 * Scrivi un programma per la gestione di un garage.
Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello. 
Definisci un oggetto che rappresenti il garage.
Scrivi una funzione che inserisca un veicolo nel garage.
Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
Scrivi una funzione che rimuove un veicolo dal garage. 
Puoi usare un array come base per salvare le automobili.

Per togliere un elemento dall’array puoi usare il metodo  arr.splice(i, 1);  dove i è l’indice posizionale e 1 rappresenta il numero di elementi da eliminare.
 */

var automobile = {marca: "Ford", modello: "Fiesta"};
function creaAutomobile(marca, modello){
    return {
        marca,
        modello
    }
}
 
var garage = {database: []};
 
garage.inserisciAuto = function(auto){
    this.database.push(auto);
};
 
garage.stampaAutomobili = function(marca){
    marca = marca.toLowerCase();
    for(var i = 0; i< this.database.length; i++){
        var auto = this.database[i];
        if (auto.marca.toLowerCase() === marca){
            console.log(auto.marca + " " + auto.modello);
        }
    }
};
 
garage.eliminaAuto = function (auto){
    for (var i = 0; i< this.database.length; i++){
        var el = this.database[i];
        if (auto.marca.toLowerCase() === el.marca.toLowerCase()
            && auto.modello.toLowerCase() === el.modello.toLowerCase()
            ){
                this.database.splice(i, 1);
            }
    }
}
 
var fiat500 = creaAutomobile("Fiat", "500L");
garage.inserisciAuto(fiat500);
garage.inserisciAuto(creaAutomobile("Mercedes", "X1"));
 
garage.stampaAutomobili("fiat");
 
garage.eliminaAuto(fiat500);
garage.eliminaAuto(automobile);
 
garage.stampaAutomobili("fiat");
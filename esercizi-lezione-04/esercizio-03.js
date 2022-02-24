/**
 * Esercizio del Garage rivisitato con le classi 
 */
class Automobile {
    constructor(marca, modello){
        this.marca = marca;
        this.modello = modello;
    }

    get marca(){
        return this._marca;
    }

    get modello(){
        return this._modello;
    }

    set marca(marca){
        if (typeof(marca) === "string"){
            this._marca = marca;
        }
    }

    set modello(modello){
        if (typeof(modello) === "string"){
            this._modello = modello;
        }
    }
}

class Garage {
    constructor(){
        this.database = [];
    }

    aggiungiAutomobile(automobile){
        if (automobile instanceof Automobile){
            this.database.push(automobile);
        }
    }

    rimuoviAutomobile(automobile){
        if (automobile instanceof Automobile){
            for (var i = 0; i< this.database.length; i++){
                var el = this.database[i];
                if (automobile.marca.toLowerCase() === el.marca.toLowerCase()
                    && automobile.modello.toLowerCase() === el.modello.toLowerCase()){
                        this.database.splice(i, 1);
                }
            }
        }
    }

    stampaAutomobili(){
        for(var i = 0; i< this.database.length; i++){
            var auto = this.database[i];
            console.log(auto.marca + " " + auto.modello);
        }
    }
}

var garage = new Garage();

var fiat500 = new Automobile("Fiat", "500L");
garage.aggiungiAutomobile(fiat500);
garage.aggiungiAutomobile("");
garage.stampaAutomobili();
console.log("----------------");
garage.aggiungiAutomobile(new Automobile("Mercedes", "X1"));
garage.stampaAutomobili();
console.log("----------------");
garage.rimuoviAutomobile(fiat500);
garage.stampaAutomobili();
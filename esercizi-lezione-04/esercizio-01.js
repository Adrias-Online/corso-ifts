/*
Scrivi un costruttore Calcolatrice che crea oggetti con 4 metodi:
leggi() richiede due valori come argomento della funzione e li memorizza nelle proprietà dell’oggetto.
somma() ritorna la somma delle proprietà.
moltiplica() ritorna il prodotto delle proprietà.
dividi() ritorna la divisione delle proprietà
 */

function Calcolatrice(){
    this.x = 0;
    this.y = 0;
    this.leggi = function(x, y){
        this.x = x;
        this.y = y;
    };
    this.somma = function() {
        return this.x + this.y;
    }

    this.moltiplica = function(){
        return this.x * this.y;
    }

    this.dividi = function() {
        if (this.y == 0 || this.x == 0){
            return 0;
        }
        return this.x / this.y;
    }
}

var calcolatrice = new Calcolatrice();
calcolatrice.leggi(5,4);
console.log(calcolatrice.moltiplica());
console.log(calcolatrice.somma());
console.log(calcolatrice.dividi());
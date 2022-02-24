/* Scrivere la classe Calcolatrice che contiene al suo interno due proprietà di tipo intero parametro1 e parametro2 che non possono essere inferiore a zero. La classe dovrà avere anche tre metodi: 
somma() ritorna la somma delle proprietà.
moltiplica() ritorna il prodotto delle proprietà.
dividi() ritorna la divisione delle proprietà */

class Calcolatrice {
    constructor(parametro1, parametro2){
        this.parametro1 = parametro1;
        this.parametro2 = parametro2;
    }

    get parametro1(){
        return this._parametro1;
    }

    set parametro1(parametro1){
        if (parametro1 <= 0 || isNaN(parametro1)){
            return 1;
        }
        this._parametro1 = parseInt(parametro1);
        return this._parametro1;
    }

    get parametro2(){
        return this._parametro2;
    }

    set parametro2(parametro2){
        if (parametro2 <= 0 || isNaN(parametro2)){
            return 1;
        }
        this._parametro2 = parseInt(parametro2);
        return this._parametro2;
    }

    somma(){
        return this.parametro1 + this.parametro2;
    }
    dividi(){
        if (this.parametro1 === 0 || this.parametro2 === 0){
            return 0;
        }
        return this.parametro1 / this.parametro2;
    }
    moltiplica(){
        return this.parametro1 * this.parametro2;
    }
}

var calcolatrice = new Calcolatrice(5,4);
console.log(calcolatrice.moltiplica());
console.log(calcolatrice.somma());
console.log(calcolatrice.dividi());
calcolatrice.parametro1 = 2;
calcolatrice.parametro2 = 3;
console.log(calcolatrice.moltiplica());
console.log(calcolatrice.somma());
console.log(calcolatrice.dividi());
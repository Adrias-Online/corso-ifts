/*
Si chiede di definire una serie di classi che rappresentano delle forme geometriche piane: Triangolo, Quadrato, Rettangolo e Cerchio.
Per ciascuna classe:
Definire il costruttore con i parametri necessari a descrivere la forma geometrica.
Implementare la classe padre FiguraGeometrica che contiene i seguenti metodi: 
calcolaPerimetro
calcolaArea
 */

class FiguraGeometrica {
    constructor(forma){
        this.forma = forma;
        this.latiFigura = [];
    }
 
    set forma(forma){
        if (forma === "cerchio"
            || forma === "triangolo"
            || forma === "quadrato"
            || forma === "rettangolo"){
                this._forma = forma;
            }else{
                this._forma = null;
            }
    }
 
    aggiungiLato(lunghezza){
        if (typeof(lunghezza) === "number"
        && lunghezza > 0){
            this.latiFigura.push(lunghezza);
        }
    }
 
    calcoloPerimetro(){
        if (this.latiFigura.length >= 3
            || this.latiFigura.length <= 4){
            var somma = 0;
            for(var i=0; i<this.latiFigura.length; i++){
                somma = somma + this.latiFigura[i];
            }
            return somma;
        }
        return undefined;
    }
 
    calcoloArea(){
        if (this.forma !== "quadrato"
        && this.forma !== "rettangolo"){
            return 0;
        }
 
        var result = 0;
        switch(this.forma){
            case "quadrato":
                result = this.latiFigura[0] * this.latiFigura[0];
                break;
            case "rettangolo":
                result = this.latiFigura[0] * this.latiFigura[0]; this.latiFigura[0] * this.latiFigura[1];
                break;
            default:
                result = 0;
                break;
        }
        return result;
    }
}
 
class Quadrato extends FiguraGeometrica {
    constructor(lunghezzaLato){
        super("quadrato");
        var i = 0;
        while(i < 4){
            super.aggiungiLato(lunghezzaLato);
            i++;
        }
    }
}
 
class Rettangolo extends FiguraGeometrica {
    constructor(lunghezzaLatoA, lunghezzaLatoB){
        super("rettangolo");
        var i = 0;
        while(i < 2){
            super.aggiungiLato(lunghezzaLatoA);
            super.aggiungiLato(lunghezzaLatoB);
            i++;
        }
    }
}
 
class Triangolo extends FiguraGeometrica {
    constructor(lunghezzaLato, altezzaTriangolo){
        super("triangolo");
        this.lunghezzaLato = lunghezzaLato;
        this.altezzaTriangolo = altezzaTriangolo;
        var i = 0;
        while(i < 3){
            super.aggiungiLato(lunghezzaLato);
            i++;
        }
    }
 
    calcoloArea(){
        return (this.altezzaTriangolo * this.lunghezzaLato)/2;
    }
}
 
class Cerchio extends FiguraGeometrica {
    pigreco = 3.14;
    constructor(r){
        super("cerchio");
        this.r = r;
    }
 
    calcoloArea(){
        return this.r * this.r * this.pigreco;
    }
 
    calcoloPerimetro(){
        return (this.r + this.r) * this.pigreco;
    }
}
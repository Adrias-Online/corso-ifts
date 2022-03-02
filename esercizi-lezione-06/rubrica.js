/**
 * Scrivi un programma per la gestione di una rubrica telefonica. Definisci una classe che rappresenti un contatto. L'unico vincolo che hai è di inserire almeno il nome, cognome e il numero di telefono come stringhe.
Definisci un’altra classe che rappresenti la Rubrica che implementa i metodi per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti con la possibilità di scegliere il tipo di ordinamento (A->Z, Z->A)
      - Inserimento di un nuovo Contatto che non sia già presente in Rubrica.
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome, o parte del nome, e restituendo il singolo contatto.
 */

class Contatto {
    constructor(nome, cognome, telefono) {
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
    }
    get nome() {
        return this._nome;
    }
    get cognome() {
        return this._cognome;
    }
    get telefono() {
        return this._telefono;
    }
    set nome(nome) {
        if (typeof (nome) === "string") {
            this._nome = nome;
        }
    }
    set cognome(cognome) {
        if (typeof (cognome) === "string") {
            this._cognome = cognome;
        }
    }
    set telefono(telefono) {
        if (typeof (telefono) === "string") {
            this._telefono = telefono;
        }
    }
}
class Rubrica {
    constructor() {
        this.database = [];
    }
    stampaContatti() {
        var rubrica = document.getElementById("rubrica");
        rubrica.innerHTML = "<div class='row text-light bg-dark'><div class='col h4'>Nome</div><div class='col h4'>Cognome</div><div class='col h4'>Numero di telefono</div></div>";
        for (var i = 0; i < this.database.length; i++) {
            var contatto = this.database[i];
            var divRow = document.createElement("div");
            if (i%2 == 0){
                divRow.className = "row text-light bg-secondary";
            }else{
                divRow.className = "row bg-light";
            }
            divRow.innerHTML = "<div class='col-md border'>" + contatto.nome + "</div>" + "<div class='col-md border'>" + contatto.cognome + "</div>" + "<div class='col-md border'>" + contatto.telefono + "</div>";
            rubrica.append(divRow);
        }
    }
    aggiungiContatto(contatto) {
        var esisteContatto = false;
        if (contatto instanceof Contatto) {
            for (var i = 0; i < this.database.length; i++) {
                if (contatto.telefono === this.database[i].telefono) {
                    esisteContatto = true;
                }
            }
            if (!esisteContatto){
                this.database.push(contatto);
            }
        }
    }
    modificaContatto(posizione, contatto) {
        if (contatto instanceof Contatto) {
            this.database[posizione].nome = contatto.nome;
            this.database[posizione].cognome = contatto.cognome;
            this.database[posizione].telefono = contatto.telefono;
        }
    }
    eliminaContatto(posizione) {
        this.database.splice(posizione, 1);
    }
    ricercaContatto(nome) {
        for (var i = 0; i < this.database.length; i++) {
            var contatto = this.database[i];
            if (contatto.nome.indexOf(nome) > -1) {
                console.log(contatto.nome + " " + contatto.cognome + " " + contatto.telefono);
            }
        }
    }
}

var r = new Rubrica();
for (var i = 0; i < 10; i++) {
    r.aggiungiContatto(new Contatto("nome"+i, "cognome_"+i, "3470654321"+i));
}
r.stampaContatti();

var aggiungiContattoBtn = document.getElementById("aggiungiContatto");
aggiungiContattoBtn.onclick = function(){
    r.aggiungiContatto(new Contatto(
        document.getElementById("nome").value,
        document.getElementById("cognome").value,
        document.getElementById("telefono").value
    ));
    r.stampaContatti();
};
/**
 * Scrivere un nuovo oggetto, Contatto, usando il costruttore. 
 * L’oggetto contatto deve avere tre proprietà: nome, cognome e età 
 * e un metodo toJson() che restituisce una stringa in formato Json dell’oggetto.
 */
function Contatto(nome, cognome, eta){
    return {
        nome: nome, 
        cognome: cognome, 
        eta: eta, 
        toJson: function(){ return JSON.stringify(this); }
    }
}

let contatto = new Contatto("giuseppe", "rossi", 20);
console.log(contatto.toJson());
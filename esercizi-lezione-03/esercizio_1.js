/*
Scrivi il seguente codice, una riga per ogni azione:
Crea un oggetto vuoto Calciatore.
Aggiungi la proprietà nome con valore Lorenzo.
Aggiungi la proprietà cognome con valore Pellegrini.
Cambia il valore di nome con Giuseppe.
Rimuovi la proprietà cognome dall’oggetto. */

var Calciatore = {};
Calciatore.nome = "Lorenzo";
Calciatore.cognome = "Pellegrini";
Calciatore.nome = "Giuseppe";
delete Calciatore.cognome;

console.log(Calciatore);
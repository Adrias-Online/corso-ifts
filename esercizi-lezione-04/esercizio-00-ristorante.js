/**
 * Variante dell'esercizio del garage
 */
 var ristorante = {nome: "Ristorante Da Beppe", prenotazioni: []};
 //L'oggetto prenotazione ha 3 proprietà
 //1) nominativo della persona che ha prenotato
 //2) il numero di persone 
 //3) il numero di cellulare
 ristorante.stampaPrenotazioni = function(){
     for (var indice=0; indice < this.prenotazioni.length; indice++){
         var prenotazione = this.prenotazioni[indice];
         console.log("Nominativo: "+ prenotazione.nominativo);
         console.log("Numero di persone: "+ prenotazione.numero_persone);
         console.log("Numero di telefono: "+ prenotazione.numero_di_telefono);
         console.log("------------------------------------------------------");
     }
 };
  
 ristorante.aggiungiNuovaPrenotazione = function(nominativo, 
     numero_persone, 
     numero_di_telefono){
         var prenotazione = {nominativo, numero_di_telefono, numero_persone};
         this.prenotazioni.push(prenotazione);
 };
  
 ristorante.annullaPrenotazione = function(numero_di_telefono){
     for (var indice = 0; indice < this.prenotazioni.length; indice++){
         var prenotazione = this.prenotazioni[indice];
         if (prenotazione.numero_di_telefono === numero_di_telefono){
             this.prenotazioni.splice(indice, 1);
         }
     }
 }
  
 ristorante.aggiungiNuovaPrenotazione("giuseppe", 2, "349065473");
 ristorante.aggiungiNuovaPrenotazione("federica", 4, "3490654732");
 ristorante.aggiungiNuovaPrenotazione("giulio", 1, "349065470");
  
 ristorante.stampaPrenotazioni();
 
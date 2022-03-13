/**
 * Scrivi una funzione che dati 5 numeri in input, dia in output la somma e la media.  
 */
function sommaMedia(n1,n2,n3,n4,n5){
    //andava gestito il fatto di dover inserire solo numeri
    if (isNaN(n5) || isNaN(n4) || isNaN(n3) || isNaN(n2) || isNaN(n1)){
        return null;  //in questo caso si poteva ritornare null or undefined
    }
    var somma = n1+n2+n3+n4+n5;
    var media = somma/5;
    return {somma, media}; // in alternativa andava bene anche l'array [somma, media]
}
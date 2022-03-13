/**
 * Scrivi una funzione che dato un numero intero (massimo 9999) 
 * conti da quante cifre è formato.
 */
function contaCifre(value){
    if (isNaN(value) || Math.abs(value) > 9999){
        return null; ////se non è un numero valido ritorno null o undefined
    }
    var intero = Math.abs(value);
    if (intero > 999 && intero <= 9999){
        return 4;
    }else if (intero > 99 && intero <= 999){
        return 3;
    }else if (intero > 9 && intero <= 99){
        return 2;
    }else{
        return 1;
    }
}

console.log(contaCifre(9999));
console.log(contaCifre(999));
console.log(contaCifre(99));
console.log(contaCifre(9));

console.log(contaCifre(10000));
console.log(contaCifre(1000));
console.log(contaCifre(100));
console.log(contaCifre(10));
console.log(contaCifre(1));
console.log(contaCifre(-1222));
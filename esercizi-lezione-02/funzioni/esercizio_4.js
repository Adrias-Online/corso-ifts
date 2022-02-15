/**
 * Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
 *  - 0 Se A e B sono equidistanti da N
 *  - 1 Se B è più vicino a N rispetto ad A
 *  - -1 Se A è più vicino a N rispetto a B
 */
 function distanza(a, b, n){
    var z = a - n;
    var x = b - n;
    if (z === x){
        return 0;
    }else if (x < z) {
        return 1;
    }else{
        return -1;
    }
}
console.log(distanza(4,4,2)); //caso a
console.log(distanza(4,3,2)); //caso b
console.log(distanza(3,4,2)); //caso c
/** 
 * Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
 * Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.
 * Esempio:
 *   Input: n = 5
 *   Output: true 2 3 5 7 11
 */
 function isNumeroPrimo(numero){
    if ( numero == 1 || numero == 2 ) {
        return true;
    }
    for ( var i = 2; i < numero; i++ ) {
        if ( numero % i == 0 ) {
            return false;
        }
    }
     return true;
  }
  function stampaNumeriPrimi(count = 1){
      var x = 0;
      var p = 1;
      console.log(isNumeroPrimo(count));
      while(true){
          if (x === count){
              break;
          }
          if (isNumeroPrimo(p)){
              console.log(p);
              x++;
          }
          p++;
      }
  }
  isNumeroPrimo(4);
  stampaNumeriPrimi(20);
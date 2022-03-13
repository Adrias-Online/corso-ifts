/**
 * Scrivi un programma che prenda in input un array multidimensionale 
 * e stampi in output la sua trasposta. 
 * Esempio: 
 *  Input: [
 *  [1, 2],
 *  [3, 4],
 *  [5, 6]
 * ] 
 * 
 * Output:
 *  [
 *      [1, 3, 5],
 *      [2, 4, 6]
 *  ]
 */
 function trasposta(matrice) {
    var trasposta = [];
    var numeroColonne = matrice.length;
    var numeroRighe = matrice.length > 0 ? matrice[0].length : 0; //un semplice check sul primo elemento
    for (var i = 0; i < numeroRighe; i++) {
        var nuovaRiga = [];
        for (var j = 0; j < numeroColonne; j++) {
            nuovaRiga.push(matrice[j][i]);
        }
        trasposta.push(nuovaRiga);
    }
    return trasposta;
} 
console.dir(trasposta([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));
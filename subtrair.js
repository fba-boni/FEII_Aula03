/**
 * 2. Crie um arquivo subtrair.js contendo uma função chamada subtrair, que deve ser 
 * exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a
 * subtração dos mesmos.
 */

 module.exports = function Subtrair(p1, p2) {
     return (p1 - p2);
 }
// export function subtrair(p1, p2) {
//     return (p1 - p2);
// }

console.log(subtrair(15, 5));
/**
 * 3. Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser
 * exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a
 * multiplicação dos mesmos. Importante::
 * a. Contemplar o cenário onde se um dos dois parâmetros for zero, a função
 * retornará zero.
 */

 module.exports = function Multiplicar(p1, p2) {
     return (p1 * p2);
 }

export function multiplicar(p1, p2) {
    return (p1 * p2);
}

console.log(multiplicar(2, 5));

//Exercício 7: reduce() – Somando valores de um array
const numeros = [2, 3, 4, 5];

const produto = numeros.reduce((acc, num) => acc * num, 1);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)
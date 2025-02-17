//Exercício 5: map() – Transformação de um array
const precos = [100, 200, 300, 400];

const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto); // [90, 180, 270, 360]
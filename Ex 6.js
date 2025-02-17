//Exercício 6: filter() – Filtrando valores em um array
const idades = [12, 25, 17, 30, 14, 19];

const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]
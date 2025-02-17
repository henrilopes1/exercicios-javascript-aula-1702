//Exercício 4: Higher-Order Function personalizada
const executarOperacao = (num1, num2, operacao) => operacao(num1, num2);

console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20
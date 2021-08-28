const soma = (x, y) => x + y;

const subtracao = (x, y) => x - y;

const multiplicacao = (x, y) => x * y;

const divisao = (x, y) => x / y;

console.log('-------------- Teste de Operações / Calculadora --------------');

console.log(`Soma = ${soma(10, 10)}`);
console.log(`Subtração = ${subtracao(10, 5)}`);
console.log(`Multiplicação = ${multiplicacao(10, 10)}`);
console.log(`Divisão = ${divisao(0, 10)}`);

const quadradoDoNumero = (num) => multiplicacao(num, num);
console.log(`Quadrado = ${quadradoDoNumero(12)}`);

const mediaDeTresNumeros = (numeros) =>
	numeros.reduce((acc, cur) => acc + cur) / numeros.length;
console.log(`Média = ${mediaDeTresNumeros([2, 4, 6])}`);

const calculaPorcentagem = (total, porcentagem) =>
	divisao(multiplicacao(total, porcentagem), 100);
console.log(`Valor da porcentagem = ${calculaPorcentagem(200, 20)}`);

const geradorDePorcentagem = (num, total) =>
	divisao(multiplicacao(num, 100), total);
console.log(`Porcentagem do total = ${geradorDePorcentagem(20, 200)}%`);

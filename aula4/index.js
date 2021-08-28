const conversorPolegadaCentimetro = (pol, cm = pol * 2.54) => cm;
console.log(conversorPolegadaCentimetro(4));

const conversorStringUrl = (string) => `http://www.${string}.com.br`;
console.log(conversorStringUrl('funcaojs'));

const adicionarExclamacao = (string) => `${string}!`;
console.log(adicionarExclamacao('Digital House'));

const calcularIdadeCachorros = (idadeHumana, idadeCachorro = idadeHumana * 7) =>
	idadeCachorro;
console.log(calcularIdadeCachorros(3));

const valorHoraTrabalhada = (salario, horasTrabalhadas = 160) =>
	salario / horasTrabalhadas;
console.log(valorHoraTrabalhada(5000));

const imc = (peso, altura) => (peso / altura ** 2).toFixed(2);
console.log(imc(60, 1.7));
console.log(imc(70, 1.7));
console.log(imc(80, 1.7));
console.log(imc(90, 1.7));

const conversorString = (string) => string.toUpperCase();
console.log(conversorString('digital house'));

const typeOfParam = (id) => typeof id;
console.log(typeOfParam(123456));

const calcularCircunferencia = (raio) => (2 * Math.PI * raio).toFixed(2);
console.log(calcularCircunferencia(5));

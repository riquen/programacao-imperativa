const calculadoraImc = (nome, sobrenome, idade, peso, altura, plano) => {
	const imc = (peso / altura ** 2).toFixed(2);
	return `${nome} ${sobrenome} tem ${idade} anos, seu IMC é de ${imc} e ${
		plano ? 'possui' : 'não possui'
	} plano.`;
};

console.log(calculadoraImc('José', 'da Silva', 27, 83.5, 1.7, true));
console.log(calculadoraImc('Carlos', 'de Souza', 28, 80.1, 1.76, true));
console.log(calculadoraImc('Aline', 'Ferreira', 33, 63.7, 1.53, false));
console.log(calculadoraImc('Ana', 'Paula', 26, 55, 1.62, true));

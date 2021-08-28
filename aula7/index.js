const status = true ? 'O valor é true - verdadeiro' : 'O valor é false - falso';

const linguagem = 'javascript' ? 'Estou aprendendo' : 'Aprenderei mais tarde';

console.log(`${status} => ${linguagem}`);

switch (status) {
	case true:
		console.log('O valor é true - verdadeiro');
		break;
	case false:
		console.log('O valor é false - falso');
}

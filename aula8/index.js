const podeSubir = (altura, estaAcompanhada) =>
	(altura <= 2.0 && altura >= 1.4) ||
	(altura < 1.4 && altura >= 1.2 && estaAcompanhada)
		? 'Acesso autorizado'
		: altura < 1.4 && altura >= 1.2 && estaAcompanhada === false
		? 'Acesso autorizado somente com acompanhante'
		: 'Acesso negado';

console.log(podeSubir(2.5, true));
console.log(podeSubir(2.5, false));
console.log(podeSubir(1.8, true));
console.log(podeSubir(1.8, false));
console.log(podeSubir(1.3, true));
console.log(podeSubir(1.3, false));
console.log(podeSubir(1.1, true));
console.log(podeSubir(1.1, false));

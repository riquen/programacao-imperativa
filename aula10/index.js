const listaDeCompras = ['Arroz', 'Feijão', 'Carne', 'Tomate', 'Banana']

console.log(listaDeCompras.join(' - '));
listaDeCompras.pop(listaDeCompras)
listaDeCompras.push('Suco')
listaDeCompras.shift(listaDeCompras)
listaDeCompras.unshift('Batata')
console.log(listaDeCompras.join(' - '));
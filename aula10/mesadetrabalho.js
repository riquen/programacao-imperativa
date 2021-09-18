const integrantesDoGrupo = ['Fabiana Yumi', 'Gustavo Felipe', 'Henrique Arantes', 'José Lucas', 'Maiara Porto']
console.log(integrantesDoGrupo[3]);

integrantesDoGrupo[0] = 'Fabiana Sato'
integrantesDoGrupo[1] = 'Gustavo Brock'
integrantesDoGrupo[2] = 'Henrique Nunes'
integrantesDoGrupo[3] = 'José Suares'
integrantesDoGrupo[4] = 'Maiara Martinelli'
console.log(integrantesDoGrupo);

integrantesDoGrupo.push('Tati Teixeira')
integrantesDoGrupo.unshift('Lucas Feitosa')
console.log(integrantesDoGrupo);

integrantesDoGrupo.pop('Tati Teixeira')
integrantesDoGrupo.shift('Lucas Feitosa')
console.log(integrantesDoGrupo);

const integrantesDh = ['Tati Teixeira', 'Lucas Feitosa']
console.log(integrantesDoGrupo.includes(integrantesDh[0, 1]))

integrantesDoGrupo.unshift('Lucas Feitosa')
console.log(integrantesDoGrupo[0] === integrantesDh[1]);

// O que esses códigos retornam?
// 1. undefined
// 2. Spiderman
// 3. str = 'una string qualquer'

const imprimirInverso = (array) => array.slice().reverse()
console.log(imprimirInverso(integrantesDoGrupo))

const inverter = (array) => {
    const novoArray = array.reverse()
    return novoArray
}
console.log(inverter(integrantesDoGrupo))

const somaArray = (array) => array.reduce((acc, cur) => acc + cur)
console.log(somaArray([1, 6, 8, 4, 3, 5, 8, 1, 4, 8, 9, 6]))

const join = (array) => array.reduce((acc, cur) => acc + cur)
console.log(join(['o', 'l', 'á']));
console.log(join(['t','c','h','a','u']));

const filmes = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela']
console.log(filmes[3]);

const filmesComLetrasMaiusculas = (array) => array.map((element) => element.toUpperCase())
console.log(filmesComLetrasMaiusculas(filmes));

const filmesDeAnimacao = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite']
const removed = filmesDeAnimacao.pop()
console.log(removed);

const joinFilmes = (array1, array2) => array1.push(...array2)
joinFilmes(filmes, filmesDeAnimacao)
console.log(filmes);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const isEqual = (array1, array2) => array1.every((valor, index) => valor === array2[index])
console.log(isEqual(asiaScores, euroScores) ? 'As notas são iguais' : 'As notas não são iguais')
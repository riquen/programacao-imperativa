const Aluno = require('../aluno')
const listaDeEstudantes = require('../listaDeEstudantes')

const curso = {
  nomeDoCurso: 'Certified Tech Developer',
  notaDeAprovacao: 7,
  maxFaltas: 3,
  listaDeEstudantes: listaDeEstudantes,
  adicionaAluno: (nome, qtdeFaltas, notas) => listaDeEstudantes.push(new Aluno(nome, qtdeFaltas, notas)),
  aprovado: (aluno) => aluno.calcularMedia() >= curso.notaDeAprovacao && aluno.qtdeFaltas < curso.maxFaltas || aluno.qtdeFaltas === curso.maxFaltas && aluno.calcularMedia() >= (curso.notaDeAprovacao * 1.1).toFixed(2) ? true : false,
  resultadoFinal: () => curso.listaDeEstudantes.map((element) => curso.aprovado(element))
}

console.log(curso.resultadoFinal());

module.exports = curso

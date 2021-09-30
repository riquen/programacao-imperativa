function Aluno(nome, qtdeFaltas, notas) {
  this.nome = nome
  this.qtdeFaltas = qtdeFaltas
  this.notas = notas
  this.calcularMedia = () => notas.reduce((acc, cur) => acc + cur) / notas.length
  this.faltas = () => qtdeFaltas += 1
}

module.exports = Aluno

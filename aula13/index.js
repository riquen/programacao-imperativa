// function Conta(numeroDaConta, tipoDeConta, saldo, titularDaConta) {
//   this.numeroDaConta = numeroDaConta
//   this.tipoDeConta = tipoDeConta
//   this.saldo = saldo
//   this.titularDaConta = titularDaConta
// }

// console.log(new Conta(123456, 'Conta Corrente', 1350, 'Henrique Arantes Nunes'))
// console.log('----------------------------------');

// const contas = []

// contas.push(new Conta(5486273622, 'Conta Corrente', 27771, 'Abigael Natte'))
// contas.push(new Conta(1183971869, 'Conta Poupança', 8675, 'Ramon Connell'))
// contas.push(new Conta(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente'))
// contas.push(new Conta(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley'))
// contas.push(new Conta(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer'))
// contas.push(new Conta(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus'))
// contas.push(new Conta(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour'))
// contas.push(new Conta(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden'))
// contas.push(new Conta(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan'))
// contas.push(new Conta(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett'))

// console.log(contas);
// console.log('----------------------------------');

// const banco = {
//   clientes: contas,
//   consultarCliente: (nome) => banco.clientes.find((element) => element.titularDaConta === nome),
//   deposito: (titularDaConta, valor) => console.log(`Depósito realizado, seu novo saldo é = R$${banco.consultarCliente(titularDaConta).saldo += valor}`),
//   saque: (titularDaConta, valor) => valor > banco.consultarCliente(titularDaConta).saldo ? console.log('Fundos insuficientes') : console.log(`Extração feita com sucesso, seu novo saldo é = R$${banco.consultarCliente(titularDaConta).saldo -= valor}`)
// }

// console.log(banco.consultarCliente('Jobi Mawtus').saldo);
// console.log('----------------------------------');

// banco.deposito('Jobi Mawtus', 1224)
// console.log('----------------------------------');

// banco.saque('Jobi Mawtus', 30000)
// console.log('----------------------------------');

const array = [
  { nome: 'Lean', idade: 27 },
  { nome: 'Eze', idade: 49 }
]

const propriedadeUnica = (array, propriedade) => console.log(array.map((element) => propriedade in element ? { propriedade: element[propriedade] } : ''))

propriedadeUnica(array, 'idade')

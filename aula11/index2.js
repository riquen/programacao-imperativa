let numerosImpares = 1
while (numerosImpares <= 100) {
    if (numerosImpares % 2 === 1) console.log(numerosImpares)
    numerosImpares++
}

let numerosPares = 1
while (numerosPares <= 100) {
    if (numerosPares % 2 === 0) console.log(numerosPares)
    numerosPares++
}

let numero = 1
const pares = []
const impares = []
while (numero <= 27) {
    if (numero % 2 === 0) pares.push(numero)
    else impares.push(numero)
    numero++
}
console.log(`Pares: ${pares}`)
console.log(`Ímpares: ${impares}`)

const alunosENotas = [[16], 12, 13, 14, 15, 10, 11, 9, 8, 7, 3, 2, 1, 5, 4, 6, 0]
const notas = []
let contador = 1
while (contador < alunosENotas.length) {
    notas.push(alunosENotas[contador])
    contador++
}
console.log(`Média = ${notas.reduce((acc, cur) => acc + cur) / notas.length}`)

const alicia = [23, 69, 32]
const bob = [12, 67, 43]
let pontosAlicia = 0
let pontosBob = 0

for (let i = 0; i < 3; i++) {
    alicia[i] > bob[i]
    ? pontosAlicia++
    : alicia[i] === bob[i]
    ? ''
    : pontosBob++
}

pontosAlicia > pontosBob
? console.log('Alicia ganhou')
: pontosAlicia === pontosBob
? console.log('Empate')
: console.log('Bob ganhou')

console.log('------------------------------------------');

const digitalHouse = (num1, num2) => {
  for (let i = 0; i <= 100; i++) {
    i % num1 === 0 && i % num2 === 0
    ? console.log('Digital House')
    : i % num1 === 0
    ? console.log('Digital')
    : i % num2 === 0
    ? console.log('House')
    : console.log(i)

  }
}

digitalHouse(3, 5)

console.log('------------------------------------------');

const somaArray = (array) => array.reduce((acc, cur) => acc + cur)
console.log(somaArray([1, 6, 8, 4, 3, 5, 8, 1, 4, 8, 9, 6]))

const join = (array) => array.reduce((acc, cur) => acc + cur)
console.log(join(['o', 'l', 'á']));
console.log(join(['t','c','h','a','u']));

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

for (let i = 0; i < peliculas.length; i++) {
    peliculas[i] = peliculas[i].toUpperCase()
}
console.log(peliculas)
console.log('------------------------------------------');

let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

for (let i = animacoes.length; i > 0; i--) {
    peliculas.push(animacoes.shift().toUpperCase())
}
console.log(peliculas)
console.log('------------------------------------------');

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

for (let i = 0; i < asiaScores.length; i++) {
    console.log(asiaScores[i] === euroScores[i] ? `A ${i + 1}ª nota é igual` : `A ${i + 1}ª nota não é igual`)
}
console.log('------------------------------------------');

const participantesENotas = [[5, 8, 4, 9, 5], [8, 7, 8, 6, 8], [7, 5, 10, 8, 3]]

const pontuacaoMedia = (participante) => participante.reduce((acc, cur) => acc + cur) / participante.length
const pontuacaoMaior = (participante) => Math.max(...participante)

for (let i = 0; i < 3; i++) {
    participantesENotas.push(pontuacaoMedia(participantesENotas[i]))
    participantesENotas.push(pontuacaoMaior(participantesENotas[i]))
}

participantesENotas[3] > participantesENotas[5] && participantesENotas[3] > participantesENotas[7]
? console.log('O participante A teve a maior média')
: participantesENotas[5] > participantesENotas[3] && participantesENotas[5] > participantesENotas[7]
? console.log('O participante B teve a maior média')
: participantesENotas[7] > participantesENotas[3] && participantesENotas[7] > participantesENotas[5]
? console.log('O participante C teve a maior média')
: console.log('Empate')

participantesENotas[4] > participantesENotas[6] && participantesENotas[4] > participantesENotas[8]
? console.log('O participante A teve a maior e-tip')
: participantesENotas[6] > participantesENotas[4] && participantesENotas[6] > participantesENotas[8]
? console.log('O participante B teve a maior e-tip')
: participantesENotas[8] > participantesENotas[4] && participantesENotas[8] > participantesENotas[6]
? console.log('O participante C teve a maior e-tip')
: console.log('Empate')

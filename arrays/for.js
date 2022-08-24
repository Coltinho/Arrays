const numeros = [100, 200, 300, 400, 500, 600]

let somaDasNotas = 0

for (let i = 0; i < numeros.length; i++){
    somaDasNotas += numeros[i]
}

let media = somaDasNotas/numeros.length

console.log(media)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
console.log("Questão 1")
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

//2
console.log("Questão 2")
let total = 0

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i]
}

console.log(total)

//3
console.log("Questão 3")
total = 0

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i]
}

mediaAritmetica = total/numbers.length
console.log(mediaAritmetica)

//4
console.log("Questão 4")

if (mediaAritmetica > 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}

//5
console.log("Questão 5")

let maiorValor = numbers[0]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i]
  }
}

console.log(maiorValor)

//6
console.log("Questão 6")

let contadorDeImpar = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    contadorDeImpar ++
  }
}

console.log(contadorDeImpar)

//7
console.log("Questão 7")

let menorValor = numbers[0]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < menorValor) {
    menorValor = numbers[i]
  }
}

console.log(menorValor)

//8
console.log("Questão 8")

let newArray = []

for (var i = 1; i < 26; i++) {
  newArray.push(i)
}

console.log(newArray)

//9
console.log("Questão 9")

for (var i = 0; i < newArray.length; i++){
  console.log(newArray[i]/2)
}



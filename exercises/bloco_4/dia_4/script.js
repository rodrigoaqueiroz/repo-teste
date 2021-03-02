// Parte 1

let info = {
  personagem: "Margarida", 
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let secondInfo = {
  personagem: "Tio Patinhas", 
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

console.log('Bem vinda, ' + info.personagem)
info['recorrente'] = "Sim"


let bothRecorrent 

if (info.recorrente == "Sim" && secondInfo.recorrente == "Sim") {
  bothRecorrent = 'Ambos Recorrentes'
} 

for (key in info) {
  console.log(info[key])
}

console.log(info.personagem + ' e ' + secondInfo.personagem)
console.log(info.origem + ' e ' + secondInfo.origem)
console.log(info.nota + ' e ' + secondInfo.nota)
console.log(bothRecorrent)

Parte 2
1
console.log('Questão 1')

function verificaPalindrome(palavra) {
  let invertida = ''
  for (let index = palavra.length-1; index >= 0; index -= 1) {
    invertida += palavra[index]  
  }  
  return invertida == palavra
}

console.log(verificaPalindrome('desenvolvimento'))

//2
console.log('Questão 2')

function showGreatestIndex(array) {
  let greatestValue = array[0]
  let greatestIndex = 0
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > greatestValue) {
      greatestValue = array[index]
      greatestIndex = index
    }
  }
  return greatestIndex  
}

console.log(showGreatestIndex([2, 3, 6, 7, 10, 1]))

//3
console.log('Questão 3')

function showSmallestIndex(array) {
  let smallestValue = array[0]
  let smallestIndex = 0
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < smallestValue) {
      smallestValue = array[index]
      smallestIndex = index
    }
  }
  return smallestIndex  
}

console.log(showSmallestIndex([2, 4, 6, 7, 10, 0, -3]))

//4
console.log('Questão 4')

function showMostCharacters(array) {
  let mostCharacters = array[0].length
  let biggestName = array[0]
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > mostCharacters) {
      biggestName = array[index]
      mostCharacters = array[index].length
    }
  }
  return biggestName
}

console.log(showMostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//5
console.log('Questão 5')

function mostRepeatedValue(array) {
  let countMax = 1;
  let countElement = 0;
  let mostRepeated 

  for (index = 0; index < array.length; index += 1){
    for (indexRepeated = index; indexRepeated < array.length; indexRepeated += 1){
      if (array[index] == array[indexRepeated]) {
        countElement += 1
      } else if (countElement > countMax) {
        countMax = countElement
        mostRepeated = array[index]
      }
    }
    countElement = 0
  }
  // console.log(countMax)
  // console.log(count)
  // console.log(mostRepeated)

  //ideia foi pega no stackoverflow: https://stackoverflow.com/questions/31227687/find-the-most-frequent-item-of-an-array-not-just-strings/31227768
  return mostRepeated

}

console.log(mostRepeatedValue([2, 3, 2, 5, 8, 2, 3,]))

//6 
console.log('Questão 6')

function sumNumbers(number){
  let sum = 0
  for (let index = 0; index <= number; index += 1) {
    sum += index
  }
  return sum
}

console.log(sumNumbers(5))

//7
console.log('Questão 7')

function compareEndingString(stringWord, stringEnding) {
  let ending = ''
  let indexLenght = stringWord.length - stringEnding.length
  let isMatched 

  for (let index = indexLenght; index < stringWord.length; index += 1) {
      ending += stringWord[index]
  }
  if (stringEnding == ending) {
    isMatched = true
  } else {
    isMatched = false
  }
  return isMatched
}

console.log(compareEndingString('trybe', 'be'))
console.log(compareEndingString('joaofernando', 'fernan'))






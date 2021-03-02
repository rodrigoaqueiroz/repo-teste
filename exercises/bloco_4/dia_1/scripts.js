let a = 15;
let b = 3;
let c = 22;

//1
function exercicio1(a, b, c) {
console.log("Exercício 1");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

}

//2
console.log("Exercício 2");
if (a > b) {
  console.log('O maior número é:' , + a);
} else {
  console.log('O maior número é:' , + b);
}

//3
console.log("Exercício 3");
if (a > b && a > c) {
  console.log('O maior número é:' , + a);
} else if (b > a && b > c) {
  console.log('O maior número é:' , + b);
} else {
  console.log('O maior número é:' , + c);
}

//4
console.log("Exercício 4");
let d = 0;

if (d > 0) {
  console.log("positive");
 } else if (d < 0){
   console.log("negative");
 } else {
   console.log("zero");
 }

//5
console.log("Exercício 5");

let e = 80;
let f = 60;
let g = 40;

console.log(e + f +g == 180)

//6 
console.log("Exercício 6");

let peca = "biSPo".toLowerCase()

switch (peca) {
  case "peao":
    console.log("Se movimento um espaço para a frente, a menos que seja a jogada inicial, quando ele tem a opção de se movimentar dois espaços");
    break
  
  case "torre":
    console.log("Movimento em linha reta");
    break

  case "cavalo":
    console.log("O cavalo se movimenta em L");
    break
    
  case "bispo":
    console.log("Se movimenta nas diagonais");
    break

  case "rainha":
    console.log("Imita o movimento de todas as outras peças, menos do cavalo");
    break

  default:
    console.log("Anda apenas para algum espaço adjacente");
}

//7
console.log("Exercício 7")
let nota = 99;
  if (nota < 0 || nota > 100) {
    console.log("Nota inválida");
}  else if (nota >= 90){
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else if (nota >= 60) {
    console.log("Nota D");
} else if (nota >= 50) {
    console.log("Nota E");
} else {
  console.log("Nota F");
}

//8 
console.log("Exercício 8")

let num1 = 7;
let num2 = 3;
let num3 = 10;

if ((num1%2 == 0) || (num3%2 == 0) ||(num3%2 == 0)) {
  console.log(true)
} else {
  console.log(false)
}

//9
console.log("Exercício 9")

num1 = 6;
num2 = 2;
num3 = 10;

if ((num1%2 != 0) || (num3%2 != 0) ||(num3%2 != 0)) {
  console.log(true)
} else {
  console.log(false)
}

//10
console.log("Exercício 10")

let custo = 16
let valorDeVenda = 50

if (custo < 0 || valorDeVenda < 0) {
  console.log("Valor inválido")
} else {
  console.log("O lucro do produto será de:", + valorDeVenda - (custo + custo*0.2) + " unidades monetarias")
}

//11
console.log("Exercício 11")
let salario = 1200
let impostos

if (salario < 1559.94) {
  salario *= 0.92
} else if (salario > 1556.95 && salario <= 2594.92) {
  salario*= 0.91
} else if (salario > 2594.93 && salario <= 5189.82) {
  salario *= 0.89
} else {
  salario -= 570.88
}

if (salario <= 1903.98) {
  impostos = 0
} else if (salario > 1903.99 && salario <= 2826.65) {
  impostos = salario*0.075- 142.80
} else if (salario > 2826.66 && salario <= 3751.05) {
  impostos = salario*0.15 - 354.80
} else if (salario > 3751.06 && salario <= 4664.68) {
  impostos = salario*0.225 - 636.13
} else {
  impostos = salario * 0.725 - 869.36
}

console.log((salario - impostos))
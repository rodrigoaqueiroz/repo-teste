//1
console.log("Questão 1")

let n = 5
let asteriscos = "*".repeat(n)

for (let linha = 0; linha < n; linha += 1) {
  console.log(asteriscos)
}

//2
console.log("Questão 2")

asteriscos = "*"

for (let linha = 0; linha <= n; linha += 1) {
  console.log(asteriscos.repeat(linha))
}

//3
console.log("Questão 3")

let espacoLivre = ' ';

for (let linha = 0; linha <= n; linha += 1) {
  console.log(espacoLivre.repeat(n-linha) + asteriscos.repeat(linha))
}

//4
console.log("Questão 4")
for (let blankSpace = 3; blankSpace <= n; blankSpace -= 1) {
  console.log(espacoLivre.repeat(blankSpace) + asteriscos.repeat('*') + espacoLivre.repeat(bla))
}
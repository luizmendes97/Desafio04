let firstNumber = Number(prompt("Ola, digite o primeiro número"))
let secondNumber = Number(prompt("Olá, digite o segundo número"))

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber
const equal = firstNumber == secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)

if (sum % 2 === 0) {
  alert("A soma dos dois números é: par")
} else {
  alert("A soma dos dois números é: impar")
}

if (firstNumber === secondNumber) {
  alert(" A soma dos dois números é: igual")
} else {
  alert("A soma dos dois números: diferente")
}

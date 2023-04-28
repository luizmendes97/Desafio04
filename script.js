let firstNumber = prompt("Ola, digite o primeiro número")
let secondNumber = prompt("Olá, digite o segundo número")

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
alert("Os números inseridos são diferentes: " + equal)

if (numero % 2 === 0) {
  alert("A soma dos dois números é:par")
} else {
  alert("A soma dos dois números é:impar")
}

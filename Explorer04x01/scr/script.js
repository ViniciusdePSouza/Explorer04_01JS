let numberOne = Number(prompt('Insira o primeiro número'))
let numberTwo = Number(prompt('Insira o Segundo número número'))

const sum = (numberOne, numberTwo) => (numberOne + numberTwo).toFixed(2)
const subtract = (numberOne, numberTwo) => (numberOne - numberTwo).toFixed(2)
const divide = (numberOne, numberTwo) => (numberOne / numberTwo).toFixed(2)
const multiply = (numberOne, numberTwo) => (numberOne * numberTwo).toFixed(2)
const rest = (numberOne, numberTwo) => (numberOne % numberTwo).toFixed(2)
const pair = (numberOne, numberTwo) => {
    let pair
    if (numberOne%2 === 0 && numberTwo%2 === 0) {
         pair = "Os dois números são pares"
    } else if (numberOne%2 === 0 || numberTwo%2 !== 0) {
         pair = "O primeiro número é par"
    } else if (numberTwo%2 === 0 || numberOne%2 !== 0) {
         pair = "O segundo número é par"
    } else {
         pair = "Nenhum dos dois números são pares"
    }

    return pair
}

const iquals = (numberOne, numberTwo) => {
    let iquals
    if (numberOne === numberTwo) {
        iquals = "Os números são iguais"
    } else {
        iquals = "Os números não são iguais"
    }
    return iquals
}

alert(`A soma dos números é: ${sum(numberOne, numberTwo)}`)
alert(`A subtração dos números é: ${subtract(numberOne, numberTwo)}`)
alert(`A divisão dos números é: ${divide(numberOne, numberTwo)}`)
alert(`A multiplicação dos números é: ${multiply(numberOne, numberTwo)}`)
alert(`O resto da divisão dos números é: ${rest(numberOne, numberTwo)}`)
alert(`${pair(numberOne, numberTwo)}`)
alert(`${iquals(numberOne, numberTwo)}`)


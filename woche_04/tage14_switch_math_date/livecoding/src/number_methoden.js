// # Number Methoden

const string1 = "10"
console.log(string1)
const myStringToNumber = Number(string1)
console.log(myStringToNumber)

const myName = "Malte"
console.log(Number(myName)) // NaN -> Not a Number

// Nice to know

console.log(Number(true))
console.log(Number(false))

// ! ---------- Number Methoden ------------

// # tofixed()

const number1 = 10.345789
console.log(number1)
console.log(number1.toFixed(1))
console.log(number1.toFixed(3))
console.log(number1.toFixed(5))

// # toString()

const number2 = 20
console.log(number2)
console.log(number2.toString())

// ! --------- Math Object Methoden -----------

// # Math.round() -> Die Zahl nach "." unter 50 wird abgerundet ansonsten wird über 50 aufgerundet

console.log(Math.round(59.444546))
console.log(Math.round(48.945345))

// # Math.ceil() -> rundet immer den nächsten integer auf

console.log(Math.ceil(33.222543))

// # Math.floor() -> rundet immer den nächsten integer ab

console.log(Math.floor(33.22456))

// # Math.random() -> Gibt uns eine zufällige Zahl zurück

console.log(Math.random())

const randomNumber = Math.random() * 9 + 1
console.log(Math.round(randomNumber))

// # Math.max() -> Gibt die größte Zahl aus einer Liste von Zahlen zurück

console.log(Math.max(4, 78, 23, 99, 12))

// # Math.sqrt() -> Gibt die Quadratwurzel einer Zahl zurück

console.log(Math.sqrt(144))

// # Math.pow() -> Hebt eine Zahl auf eine bestimmte Potenz

console.log(Math.pow(2, 5)) // 2 hoch 5

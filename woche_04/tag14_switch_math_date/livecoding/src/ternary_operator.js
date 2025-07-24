// ! --------- Ternary Operator ---------

const myAge = 19

if (myAge < 20) {
  console.log("Ich darf Party machen")
} else {
  console.log("Geh bitte nach Hause")
}

// # Schreibweise -> Zuerst die Variable, dann Fragezeichen und danach der True-Bedingung und nach dem ":" kommt die false-Bedingung
myAge > 20 ? console.log("Ich darf Party machen") : console.log("Geh bitte nach Hause")

const habIchHunger = false

habIchHunger ? console.log("Ja, ich hab Hunger") : console.log("Nein danke, ich habe keinen Appetit")

let zahl2 = 6

let ergebnis = zahl2 > 5 ? "Ja, sie ist größer als 5" : "Nein, sie ist kleiner als 5"

console.log(ergebnis)

const durst = true ? console.log("Nein, Danke.") : console.log("Ja, ich habe Durst.")

const passwort = "geheim"

// * Das was man in den runden Klammern bei if-else schreibt ist, das was man am Anfang beim Ternary Operator vor den Fragezeichen schreibt: Das wäre die  Bedingung
// *                           true Area      false Area
const zugang = passwort === "geheim" ? "Zugang erlaubt" : "Zugang verweigert"

console.log(zugang)

// * -------- Komplexer ---------

const userName = "Max"

const login = userName === "Max" && passwort == "geheim" ? "Willkommen Max!" : "Passwort und Username sind falsch"

// # Beispiel Taschenrechner

const a = 5
const b = 2
const operator = "*"

const result = operator === "+" ? a + b : operator === "*" ? a * b : operator === "/" ? a / b : a - b

console.log(result)

switch (operator) {
  case "+":
    result = a + b
    break
  case "*":
    result = a * b
    break
  case "/":
    result = a / b
    break
  case "-":
    result = a - b
    break
  default:
    result = "Ungültiger Operator"
}

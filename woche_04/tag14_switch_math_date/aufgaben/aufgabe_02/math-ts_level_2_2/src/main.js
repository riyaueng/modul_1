const randomNum = Math.floor(Math.random() * 9 + 1)
console.log(randomNum)

const inputWindow = window.prompt("Schätzen Sie eine Nummer von 1 bis 10!")

if (inputWindow == randomNum) {
  console.log("Du hast gewonnen! Die Zahl war korrekt.")
} else {
  console.log("Du hast verloren! Die Zahl lautet" + " " + randomNum)
}

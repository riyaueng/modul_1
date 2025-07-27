// # Beipsiel 1 --- submit

//  ! Variante 1
// window.loginFunc = function loginFunc() {
//   const usernameInput = document.querySelector("#username").value
//   document.querySelector("p").innerText = `Hallo ${usernameInput}`
// * oder text.Content für Inhalte!
// }

// ! Variante 2

const usernameInputElement = document.querySelector("#username")

console.log(usernameInputElement)
console.dir(usernameInputElement)

const passwordInputElement = document.querySelector("#password")

const result = document.querySelector("p")

let userNameVomBackend = "Joe"
let passwordVomBackend = "12345"

// * (event oder pizza) ist ein Platzhalter!
document.querySelector("#login").addEventListener("submit", function (pizza) {
  pizza.preventDefault()

  const usernameInputValue = usernameInputElement.value
  const passwordInputValue = passwordInputElement.value

  if (usernameInputValue === userNameVomBackend && passwordInputValue === passwordVomBackend) {
    result.innerText = `Guten Morgen ${usernameInputValue}, du bist eingeloggt`
  } else {
    result.innerText = `Password oder Username ist falsch`
  }
})

// # Beipsiel 2 ---  input

document.querySelector("#live-input").addEventListener("input", function (event) {
  // ! to.UpperCase ist erlaubt, weil es sich um strings handelt

  const inputValue = event.target.value
  document.querySelector("#live-input").style.color = "red"
  console.log("Das ist die Eingabe", inputValue.toUpperCase())
})

document.querySelector("#agree-checkbox").addEventListener("change", function (e) {
  const checkBoxValue = e.target.checked
  console.log("Checkbox ist aktiv", checkBoxValue)
})

// # Beipsiel 3 ---- input

document.querySelector("#color-picker").addEventListener("input", function (event) {
  const inputElementValue = event.target.value
  document.body.style.backgroundColor = inputElementValue
})

// # Beipsiel 4 ---- click

const myButton = document.querySelector("say-hi-btn")
const helloOutputElement = document.querySelector("#hello_output")

// myButton.addEventListener("click", function () {
//   helloOutputElement.innerText = `Hallooo vom AddEventListner`
// })

// # Beipsiel 5 --- mouseover / mouseout

const textInputElement = document.querySelector("#text-input")

textInputElement.addEventListener("mouseover", function () {
  console.log("Die Maus wurde über mich bewegt")
  textInputElement.style.border = "2px solid red"
})

textInputElement.addEventListener("mouseout", function () {
  textInputElement.style.border = "2px solid blue"
})

// # Beipsiel 6 ---

const selectInputElement = document.querySelector("#select-input")
const selectOutputElement = document.querySelector("#select-output")

selectInputElement.addEventListener("change", function () {
  console.log("Ich wurde verändert")
  const selectInputValue = selectInputElement.value
  selectOutputElement.innerText = `Your order is ${selectInputValue}`
})

// # Beipsiel 7 ---

const hacker = document.querySelector("#hacker")
const log = document.querySelector("#log")

hacker.addEventListener("keyup", function (event) {
  console.log(event.code)
})

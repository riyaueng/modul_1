// # Functions

function sayHello(firstName) {
  const btnOutput = document.querySelector(".btnOutput")
  console.log(btnOutput)

  btnOutput.innerHTML = `<p>${firstName}</p>`
}

// ? Counter

let outputVal = 0

function calc(operator) {
  const outputh4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal + operator
  outputh4.innerText = outputVal
}

function malZwei() {
  const outputh4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal * 2
  outputh4.innerText = outputVal
}

function reset() {
  const outputh4 = document.querySelector(".output-vom-rechner")
  outputVal = 0
  outputh4.innerText = outputVal
}

// # values auslesen

function getInputVal() {
  const name = document.querySelector("#name").value
  const age = document.querySelector("#age").valueAsNumber
  const range = Number(document.querySelector("#range").value)
  const checkbox = document.querySelector("#checkbox").checked
  const bday = document.querySelector("#bday").value

  console.log(name)
  console.log(age)
  console.log(range)
  console.log(checkbox)
  console.log(bday)

  document.querySelector(
    ".values"
  ).innerHTML += `<p>${name}, ${age}, range: ${range}, happy: ${checkbox}, Bday: ${bday}</p>`
}

// # Conditionals Statements -> if/else

const age = 17
if (age >= 18) {
  console.log("Du bist volljährig!")
} else {
  console.log("Du bist minderjährig!")
}

function checkNumber() {
  const inputNum = document.querySelector(".num-input")
  const inputNumVal = inputNum.value

  if (inputNumVal < 0) {
    console.log("Zahl ist kleiner als 0.")
  } else if (inputNumVal == 0) {
    console.log("Zahl ist 0.")
  } else {
    console.log("Zahl ist größer als 0")
  }
}

// Login
// ? Login Daten
const username = "Riya"
const password = "123"

function checkUserData() {
  let loginUserName = document.querySelector("#userName")
  let password = document.querySelector("#password")

  const userNameVal = loginUserName
  const passwordVal = passwordInput.value
  console.log(userNameVal, passwordVal)

  const output = document.querySelector(".login-feedback")

  if (userNameVal == userNameVal && password == passwordVal) {
    output.innerHTML = "<p>Login succesful.</p>"
  } else {
    output.innerHTML = "<p>username or password wrong.</p>"
  }
}

// # switch

const age1 = 21

switch (age1) {
  case 20:
    console.log("Age is 20")
    break
  case 21:
    console.log("Age is 21")
    break
  case 18:
    console.log("Age is 18")
    break
  default:
    console.log("Age ist uns egal")
}

//  classlist -> add, remove & toogle
//  add
function addClass() {
  const headline = document.querySelector(".add")
  headline.classList.add("big")
}

// remove

const headline1 = document.querySelector(".remove")
function removeClass() {
  headline1.classList.remove("remove")
}

function toggleClass() {
  const headline1 = document.querySelector(".headline-toggle")
  headline1.classList.toggle("remove")
}

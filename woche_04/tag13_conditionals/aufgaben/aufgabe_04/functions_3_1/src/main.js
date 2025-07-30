import "./style.css"

// * Lösungsweg mit onclick nicht möglich ohne Global Scope!
// * type="module" verhindert den Zugriff

// const green = "#228B22"
// const purple = "#6C046C"

// const lightBlue = "#57599e"
// const yellow = "#DAC24B"

// const darkBlue = "#050730"
// const orange = "#EB8A36"

// const blue = " #210cAA"
// const cyan = "#36e2eb"

// function changeColor(headlineColor, bgColor) {
//   document.querySelector("h1").style.color = headlineColor
//   document.body.style.backgroundColor = bgColor
//   return
// }

// window.changeColor = changeColor

// console.log(changeColor)

// * Lösungsweg mit .addEventListener

const green = "#228B22"
const purple = "#6C046C"

const lightBlue = "#57599e"
const yellow = "#DAC24B"

const darkBlue = "#050730"
const orange = "#EB8A36"

const blue = " #210cAA"
const cyan = "#36e2eb"

const background = document.querySelector("body")
const headline = document.querySelector("h1")
const superBall1 = document.querySelector(".circle1")
const superBall2 = document.querySelector(".circle2")
const superBall3 = document.querySelector(".circle3")
const superBall4 = document.querySelector(".circle4")

superBall1.addEventListener("click", function () {
  setColors(purple, green)
})

superBall2.addEventListener("click", function () {
  setColors(yellow, lightBlue)
})

superBall3.addEventListener("click", function () {
  setColors(orange, darkBlue)
})

superBall4.addEventListener("click", function () {
  setColors(cyan, blue)
})

function setColors(headlineColor, bgColor) {
  background.style.backgroundColor = bgColor
  headline.style.color = headlineColor
}

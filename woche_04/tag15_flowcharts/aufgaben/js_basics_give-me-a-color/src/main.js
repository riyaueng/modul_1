import "./style.css"

const clickBtn = document.getElementById("btn_color")
const bgColor = document.querySelector(".form_color").addEventListener("submit", changeBgColor)

function changeBgColor() {
  event.preventDefault()
  const inputColor = document.getElementById("input_color").value
  document.body.style.backgroundColor = inputColor
}

import "./style.css"

const rangeNum = document.querySelector("#range").value

function checkAirQuality(event) {
  event.preventDefault()
  const rangeNumText = document.querySelector(".range_number")
  const resultLevel = document.querySelector(".level_output")
  rangeNumText = rangeNum
  rangeNumText.innerText = `Luftqualität: ${rangeNum}`
}

rangeNum.addEventListener("change", checkAirQuality)

// const rangeNum = document.querySelector("#range").value

// rangeNum.addEventListener("change", function checkAirQuality(event) {
//   event.preventDefault()
//   const rangeNumText = document.querySelector(".range_number")
//   const resultLevel = document.querySelector(".level_output")
//   rangeNumText = rangeNum
//   rangeNumText.innerText = `Luftqualität: ${rangeNum}`
// })

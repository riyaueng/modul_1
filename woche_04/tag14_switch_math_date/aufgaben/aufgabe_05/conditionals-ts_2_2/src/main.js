import "./style.css"

const rangeNum = document.querySelector("#range")
const rangeNumText = document.querySelector(".range_number")
const resultLevelConcern = document.querySelector(".level_output_concern")
const resultLevelEffect = document.querySelector(".level_output_effect")

function checkAirQuality() {
  const rangeNumValue = rangeNum.value
  rangeNumText.textContent = `Luftqualität: ${rangeNumValue}`

  if (rangeNumValue <= 50) {
    document.body.style.background = "Green"
    resultLevelConcern.innerHTML = "<h3>Level of health concern: Good</h3>"
    resultLevelEffect.innerHTML = "<h3>Level of health effect: Little or no risk</h3>"
  } else if (rangeNumValue >= 50 && rangeNumValue <= 100) {
    document.body.style.backgroundColor = "yellow"
    resultLevelConcern.innerHTML = "<h3>Level of health concern: Moderate</h3>"
    resultLevelEffect.innerHTML = "<h3>Level of health effect: Acceptable quality</h3>"
  } else if (rangeNumValue >= 100 && rangeNumValue <= 150) {
    document.body.style.backgroundColor = "orange"
    resultLevelConcern.innerHTML = "<h3>Level of health concern: Unhealthy for sensitive groups</h3>"
    resultLevelEffect.innerHTML = "<h3>Level of health effect: Generable publics not likely affected</h3>"
  }
}

rangeNum.addEventListener("input", function (event) {
  checkAirQuality(event.target.value)
})

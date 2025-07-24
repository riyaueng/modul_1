import "./style.css"

function alterDiff(event) {
  event.preventDefault()
  const inputAlter1 = document.getElementById("alter_1").value
  const inputAlter2 = document.getElementById("alter_2").value
  const outputDiff = document.querySelector(".result_diff")
  const resultDiff = Math.abs(inputAlter1 - inputAlter2)
  outputDiff.innerHTML = `Die Differenz ist: ${resultDiff}`
}

const resultBtn = document.getElementById("btn_diff")
resultBtn.addEventListener("click", alterDiff)

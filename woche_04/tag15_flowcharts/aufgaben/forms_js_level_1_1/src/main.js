function multiNum(event) {
  event.preventDefault()
  const inputNum = document.getElementById("input_number").value
  const resultText = document.getElementById("result_multi")
  const resultMulti = inputNum * 2
  resultText.innerHTML = `<p>Eregbnis: ${resultMulti}</p>`
}

const button = document.getElementById("btn")
button.addEventListener("click", multiNum)

import "./style.css"

function altersangabe(event) {
  event.preventDefault()
  const inputJahr = document.getElementById("input_jahreszahl").value
  const aktuelJahr = new Date().getFullYear()
  const outputAlter = document.querySelector(".output_alter")
  const resultAlter = aktuelJahr - inputJahr
  outputAlter.innerHTML = `<p>Dein Alter lautet: ${resultAlter}</p>`
}

const button = document.getElementById("btn")
button.addEventListener("click", altersangabe)

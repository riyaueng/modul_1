function weather() {
  const inputNum = document.querySelector(".weather_numbers").value
  const hinweis = document.querySelector(".weather_note")

  if (inputNum >= 8 && inputNum <= 10) {
    hinweis.innerHTML = "<p>super</p>"
  } else if (inputNum >= 6 && inputNum <= 7) {
    hinweis.innerHTML = "<p>gut</p>"
  } else if (inputNum >= 3 && inputNum <= 5) {
    hinweis.innerHTML = "<p>okay</p>"
  } else if (inputNum >= 0 && inputNum <= 2) {
    hinweis.innerHTML = "<p>schlecht</p>"
  }
}

function checkAge() {
  const inputAge = document.querySelector(".input_age").value
  const hinweis = document.querySelector(".checkResult")
  if (inputAge >= 18) {
    hinweis.innerHTML = "<p>Volljährig</p>"
  } else {
    hinweis.innerHTML = "<p>Minderjährig</p>"
  }
}

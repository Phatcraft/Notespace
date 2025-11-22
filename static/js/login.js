var form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  var formData = new FormData(form)

  var username = formData.get("username")
  var password = formData.get("password")

  alert(`Hello ${username}`)
  location.replace("/")
})
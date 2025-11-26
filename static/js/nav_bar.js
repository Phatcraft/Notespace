var navButton = document.getElementById("nav-btn")
var leftNav = document.getElementById("left-nav")
var body = document.getElementById("body")
var main = document.getElementById("main-page")

// Functions
function isOpen(){ return leftNav.className == "nav-show" }
function open(){
  var navChildren = leftNav.children
  for(let i = 0; i < navChildren.length; i++){
    navChildren[i].style.display = "block"
  }

  leftNav.className = "nav-show"
  main.style.display = "none"
  body.className = "body-hide"
}
function close(){
  var navChildren = leftNav.children
  for(let i = 0; i < navChildren.length; i++){
    navChildren[i].style.display = "none"
  }

  leftNav.className = "nav-hide"
  main.style.display = "block"
  body.className = "body-show"
}

// Nav init
close()

// Nav button action
navButton.addEventListener("click", () => {
  if(isOpen()) close()
  else open()
})


// Click outside to close
document.addEventListener("click", (event) => {
  if(!navButton.contains(event.target) && !leftNav.contains(event.target)){
    if(isOpen()) close()
  }
})
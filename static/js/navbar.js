var body = document.getElementById("body")
var bar = document.getElementById("left-bar")
var main = document.getElementById("main")
var nav = document.getElementById("nav")

function show(){
  body.className = "bodyHide"
  bar.className = "barShow"
  main.className = "mainHide"
}
function hide(){
  body.className = "bodyShow"
  bar.className = "barHide"
  main.className = "mainShow"
}


hide()
var navBtn = document.getElementById("nav-btn")
navBtn.addEventListener("click", () => {
  if(bar.className == "barShow") hide()
  else show()
})

document.addEventListener("click", (event) => {
  if(!bar.contains(event.target) && !nav.contains(event.target)){
    if(bar.className == "barShow") hide()
  }
})
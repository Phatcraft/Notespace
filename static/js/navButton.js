var navButton = document.getElementById("nav-button")
var navLeftBar = document.getElementById("left-bar")
var mainpage = document.getElementById("main-page")
var pagebody = document.getElementById("body")

// Page init
navLeftBar.className = "hide"
mainpage.className = "main-show"

navButton.addEventListener("click", () => {
  if(navLeftBar.className == "hide"){
    navLeftBar.className = "show"
    mainpage.className = "main-hide"
    pagebody.style.backgroundColor = "var(--primary-hide)"
  }
  else{
    navLeftBar.className = "hide"
    mainpage.className = "main-show"
    pagebody.style.backgroundColor = "var(--primary)"
  }
})

document.addEventListener("click", (event) => {
  if(!navButton.contains(event.target) && !navLeftBar.contains(event.target)){
    if(navLeftBar.className == "show"){
      navLeftBar.className = "hide"
      mainpage.className = "main-show"
      pagebody.style.backgroundColor = "var(--primary)"
    }
  }
})
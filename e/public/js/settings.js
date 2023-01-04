var initTab = window.location.hash.split("#")[1] || "Tab"

try {
  document.querySelector(".sidecard[tab='" + initTab + "']").classList.add("sidecardsel")
  document.querySelector(".tabcontent[tab='" + initTab + "']").classList.add("tabcontentopen")
} catch {
  initTab = "Tab"
  document.querySelector(".sidecard[tab='" + initTab + "']").classList.add("sidecardsel")
  document.querySelector(".tabcontent[tab='" + initTab + "']").classList.add("tabcontentopen")
}

function setTab(tab) {
  document.querySelectorAll(".sidecardsel").forEach(elem => elem.classList.remove("sidecardsel"))
  tab.classList.add("sidecardsel")

  document.querySelectorAll(".tabcontentopen").forEach(elem => elem.classList.remove("tabcontentopen"))
  document.querySelector(".tabcontent[tab='" + tab.getAttribute("tab") + "']").classList.add("tabcontentopen")
  window.location.hash = "#" + tab.getAttribute("tab")
}

function goBlank() {
  var page = new ABC({
    "type": "blank"
  })
  page.setType("blank")
  page.setUrl(window.location.href)
  page.open()
  window.location = "https://google.com"
}

var search1 = localStorage.getItem("search")
var duckduckgo = document.getElementById("duckduckgo")
var brave = document.getElementById("brave")
var google = document.getElementById("google")

if (localStorage.getItem("search") !== null) {
  var search2 = search1.toLowerCase()
  document.getElementById(search2).classList.add("tabbuttonactive")
} else {
  localStorage.setItem("search", "DuckDuckGo")
  duckduckgo.classList.add("tabbuttonactive")
}

function setsearch(engine) {
  localStorage.setItem("search", engine)
  switch(engine) {
    case 'DuckDuckGo':
    duckduckgo.classList.add("tabbuttonactive")
    brave.classList.remove("tabbuttonactive")
    google.classList.remove("tabbuttonactive")
    break;
    case 'Brave':
    duckduckgo.classList.remove("tabbuttonactive")
    brave.classList.add("tabbuttonactive")
    google.classList.remove("tabbuttonactive")
    break;
    case 'Google':
    duckduckgo.classList.remove("tabbuttonactive")
    brave.classList.remove("tabbuttonactive")
    google.classList.add("tabbuttonactive")
    break;
  }
}

function setcss(input) {
  if (input !== "") {
    localStorage.setItem("css", input)
    location.reload();
  } else {
    localStorage.removeItem("css")
    location.reload();
  }
}

var css = localStorage.getItem("css")

if (css !== null) {
  document.getElementById("setcssinput").value = css
}

var appearance = localStorage.getItem("appearance")

if (localStorage.getItem("appearance") !== null) {
  document.getElementsByTagName("body")[0].setAttribute("appearance", appearance)
  document.querySelectorAll(".tabtheme").forEach(e => e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabtheme[theme='" + appearance + "']").classList.add("tabbuttonactive")
} else {
  localStorage.setItem("appearance", "default")
  document.getElementsByTagName("body")[0].setAttribute("appearance", "default")
}

function setapp(theme) {
  localStorage.setItem("appearance", theme)
  document.querySelectorAll(".tabtheme").forEach(e => e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabtheme[theme='" + theme + "']").classList.add("tabbuttonactive")
  document.getElementsByTagName("body")[0].setAttribute("appearance", theme)
  if (!localStorage.getItem("favicon")) {
    setLogo(getComputedStyle(document.body).getPropertyValue('--highlight').replaceAll(" ", ""))
  }
}


var gosurf = localStorage.getItem("go") || "default"
document.querySelector(".tabgo[go='" + gosurf + "']").classList.add("tabbuttonactive")

function setgo(go) {
  document.querySelectorAll(".tabgo").forEach(e => e.classList.remove("tabbuttonactive"));
  localStorage.setItem("go", go)
  document.querySelector(".tabgo[go='" + go + "']").classList.add("tabbuttonactive")
}

var background = localStorage.getItem("background") || "none"
document.querySelector(".tabbg[bg='" + background + "']").classList.add("tabbuttonactive")

function setbg(bg) {
  document.querySelectorAll(".tabbg").forEach(e => e.classList.remove("tabbuttonactive"));
  localStorage.setItem("background", bg)
  document.querySelector(".tabbg[bg='" + bg + "']").classList.add("tabbuttonactive")
  if (bg == "particles") {
    loadParticles()
  } else if (bg == "stars") {
    loadStars()
  } else if (bg == "none") {
    destroySquares()
    destroyParticles()
  } else if (bg == "squares") {
    loadSquares()
  }
}

async function installPWA() {
  // installApp is defined in index.js
  installApp.prompt()
  var { outcome } = await deferredPrompt.userChoice
  if (outcome == "accepted") {
    window.location.hash = "#Tab"
    window.location.reload()
  }
}

async function loadFromFile() {
  alert('Coming Soon')
}

async function saveToFile() {
  createFsStore();
  save({ onlySave: true });
  alert('Coming Soon')
}

function resetSettings() {
  if (confirm('Are you sure you want to reset all settings?')) {
    localStorage.removeItem('css')
    localStorage.removeItem('search')
    localStorage.removeItem('appearance')
    localStorage.removeItem('go')
    localStorage.removeItem('favicon')
    localStorage.removeItem('background')
    window.location.reload()
  }
}

function resetEverything() {
  if(confirm('Are you sure you want to reset EVERTHING? THIS CANNOT BE UNDONE!!!\n\n\n(includes all your saves as well)')) {
  alert('NO')
  }
}
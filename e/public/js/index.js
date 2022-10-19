//  _____             _   _      _                      _    
// |  ___|__   __ _  | \ | | ___| |___      _____  _ __| | __
// | |_ / _ \ / _` | |  \| |/ _ \ __\ \ /\ / / _ \| '__| |/ /
// |  _| (_) | (_| | | |\  |  __/ |_ \ V  V / (_) | |  |   < 
// |_|  \___/ \__, | |_| \_|\___|\__| \_/\_/ \___/|_|  |_|\_\
//            |___/                                          

var appearance = localStorage.getItem("appearance")

if (localStorage.hasOwnProperty("appearance")) {
    document.getElementsByTagName("body")[0].setAttribute("appearance", appearance)
  setLogo(getComputedStyle(document.body).getPropertyValue('--highlight').replaceAll(" ", ""))
} else {
    localStorage.setItem("appearance", "default")
    document.getElementsByTagName("body")[0].setAttribute("appearance", "default")
}


var title = localStorage.getItem("title")
var favicon = localStorage.getItem("favicon")

if (localStorage.hasOwnProperty("title")) {
    document.title = title
}

if (localStorage.hasOwnProperty("favicon")) {
  document.querySelector("link[rel='shortcut icon']").href = favicon;
}

function settitle(title) {
  if (title !== "") {
  localStorage.setItem("title", title)
  document.title = title
  } else {
  localStorage.removeItem("title")
  document.title = "Settings"
  }
}

function setfavicon(icon, no) {
  if (icon !== "") {
  if (!no) {
  icon = __sussy$.config._co + icon
  }
  localStorage.setItem("favicon", icon)
  document.querySelector("link[rel='shortcut icon']").href = icon;
  } else {
  localStorage.removeItem("favicon")
  setLogo(getComputedStyle(document.body).getPropertyValue('--highlight').replaceAll(" ", ""))
  }
}

function setgoogle() {
  settitle("Google")
  setfavicon("https://www.google.com/favicon.ico")
}

function setgoogled() {
  settitle("Google Drive")
  setfavicon("https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png")
}

function setedpuzzle() {
  settitle("Edpuzzle")
  setfavicon("https://edpuzzle.imgix.net/favicons/favicon-32.png")
}

function setzoom() {
  settitle("Zoom")
  setfavicon("https://st1.zoom.us/zoom.ico")
}

function setreset() {
  localStorage.removeItem("title")
  localStorage.removeItem("favicon")
  document.title = "Settings"
  setLogo(getComputedStyle(document.body).getPropertyValue('--highlight').replaceAll(" ", ""))
  document.getElementById("cloaktitletitle").value = ""
  document.getElementById("cloaktitleicon").value = ""
  document.getElementById("cloaktitleurl").value = ""
}

async function setTabByURL(url) {
if (url == null || url == "") {
return setreset();
}
var title = url;
var favicon = "data:,"
var site = await fetch(__sussy$.config._rho + url)
var code = await site.text()
var parser = new DOMParser();
var doc = parser.parseFromString(code, "text/html");
if (doc.getElementsByTagName("title")[0]) {
title = doc.getElementsByTagName("title")[0].innerText
}
if (doc.querySelector("link[rel='shortcut icon']")) {
favicon = doc.querySelector("link[rel='shortcut icon']").href
}
if (doc.querySelector("link[rel='icon']")) {
favicon = doc.querySelector("link[rel='icon']").href
}
settitle(title)
setfavicon(favicon, true)
}

var info = document.getElementById("info")
var isinfo = "no"

function goinfo() {
  if (isinfo == "no") {
    document.getElementById("info").style.display = "flex"
    isinfo = "yes"
  } else {
    document.getElementById("info").style.display = "none"
    isinfo = "no"
  }
}

if (localStorage.getItem("search") == null) {
localStorage.setItem("search", "DuckDuckGo")
}

var css = localStorage.getItem("css")

if (css !== null) {
  var csselm = document.createElement("style")
  csselm.innerText = css
  document.body.appendChild(csselm)
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(window.location.origin + "/sw.js");
}

function getLogo() {
return "/img/logo.svg";
}

function setLogo(highlight) {
document.querySelector("link[rel='shortcut icon']").href = "/img/logo.svg"
}

var installApp

window.addEventListener('beforeinstallprompt', function (e) {
e.preventDefault();
installApp = e;
});

function createBox() {
let span = document.createElement('span');
span.classList.add('animated-box');
let size = Math.random() * 80;
span.style.height = 40 + size + 'px';
span.style.width = 40 + size + 'px';
span.style.top = ((1.3 * Math.random()) * innerHeight) + 'px';
span.style.left = ((Math.random()) * (innerWidth)) + 'px';

document.querySelector('#squares').appendChild(span);

setTimeout(() => {
span.remove();
}, 6000)
}

function loadSquares() {
if (window.squareInt) return;
if (window.pJSDom[0]) {
window.pJSDom[0].pJS.fn.vendors.destroypJS();
window["pJSDom"] = [];
}
window.squareInt = setInterval(createBox, 300);
}

function destroySquares() {
clearInterval(window.squareInt);
window.squareInt = null;
document.querySelector('#squares').innerHTML = ""
}

function destroyParticles() {
if (!window.pJSDom[0]) return;
window.pJSDom[0].pJS.fn.vendors.destroypJS();
window["pJSDom"] = [];
}

function loadParticles() {
destroySquares()
destroyParticles()
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

function loadStars() {
destroySquares()
destroyParticles()
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

var background = localStorage.getItem("background") || ""
if (background == "particles") {
loadParticles()
} else if (background == "stars") {
loadStars()
} else if (background == "squares") {
loadSquares()
}
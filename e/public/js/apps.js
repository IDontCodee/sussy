function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};

function searchapps() {
  var searchapps = document.getElementById("searchapps");
  var filter = searchapps.value.toLowerCase();
  var app = document.getElementsByClassName('app');

  for (i = 0; i < app.length; i++) {
    if (app[i].innerText.toLowerCase().includes(filter)) {
      app[i].style.display = "initial";
    } else {
      app[i].style.display = "none";
    }
  }


  document.getElementById("noapp").style.display = "inherit"

  for (item in app) {
    if (app[item].innerText !== undefined) {
      if (app[item].style.display !== "none") {
        document.getElementById("noapp").style.display = "none"
      }
    }
  }

}


function setTabTitle(title) {
  var navtitle = document.getElementById("nav-title")
  if (title) {
    var newTitle = title
  } else {
    var appframe = document.getElementById("appframe")
    var newTitle = appframe.contentWindow.location.host
  }
  if (newTitle === window.location.host) {
    navtitle.innerText = "sussy | Title Hidden"
  } else {
    navtitle.innerText = newTitle
  }
}

function setTabIcon(favicon) {
  var navicon = document.getElementById("nav-icon")
  if (favicon) {
    navicon.src = favicon
  } else {
    navicon.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJjNS41MiAwIDEwIDQuNDggMTAgMTBzLTQuNDggMTAtMTAgMTBTMiAxNy41MiAyIDEyIDYuNDggMiAxMiAyek00IDEyaDQuNGMzLjQwNy4wMjIgNC45MjIgMS43MyA0LjU0MyA1LjEyN0g5LjQ4OHYyLjQ3YTguMDA0IDguMDA0IDAgMDAxMC40OTgtOC4wODNDMTkuMzI3IDEyLjUwNCAxOC4zMzIgMTMgMTcgMTNjLTIuMTM3IDAtMy4yMDYtLjkxNi0zLjIwNi0yLjc1aC0zLjc0OGMtLjI3NC0yLjcyOC42ODMtNC4wOTIgMi44Ny00LjA5MiAwLS45NzUuMzI3LTEuNTk3LjgxMS0xLjk3QTguMDA0IDguMDA0IDAgMDA0IDEyeiIgZmlsbD0iIzNDNDA0MyIvPjwvc3ZnPg=="
  }
}
const _0x52b208 = ["tiktok.com"]
function closeapp() {
  var appframe = document.getElementById("appframe");
  var closeapp = document.getElementById("closeapp");
  var reloadapp = document.getElementById("reloadapp");
  var fullapp = document.getElementById("fullapp");
  var controls = document.getElementById("controls-app");
  var navtitle = document.getElementById("nav-title");
  controls.style.display = "none";
  closeapp.style.display = "none";
  reloadapp.style.display = "none";
  fullapp.style.display = "none";
  appframe.style.display = "none";
  closeapp.setAttribute("src", "");
  navtitle.innerText = "Loading..."
}

function reloadapp() {
  var appframe = document.getElementById("appframe");
  appframe.contentWindow.location.reload()
}

function fullapp() {
  var appframe = document.getElementById("appframe")
  appframe.requestFullscreen()
}

function openapp(app) {
  var appframe = document.getElementById("appframe");
  var closeapp = document.getElementById("closeapp");
  var reloadapp = document.getElementById("reloadapp");
  var fullapp = document.getElementById("fullapp");
  var controls = document.getElementById("controls-app");
  controls.style.display = "flex";
  appframe.style.display = "initial";
  closeapp.style.display = "initial";
  reloadapp.style.display = "initial";
  fullapp.style.display = "initial";
  appframe.setAttribute("src", app);
  document.getElementById("searchapps").value = "";
}

async function fetchapps() {
  let response = await fetch("/apps/apps.json")
  let json = await response.json()

  json.forEach((element, index) => {
    var location, realloc, tmp;
    if (element['isMoreStuff']) { location = __sussy$.config.moreStuffURI } else { location = element.location }
    // Fix a error before it happens
    try {
      tmp = atob(location.split('#')[1]);
      if (isUrl(tmp)) {
        if (!(tmp.startsWith('https://') || tmp.startsWith('http://'))) { tmp = 'http://' + tmp; };
        realloc = new URL(tmp);
      } else realloc = tmp;
    } catch (e) {
      tmp = location;
      if (isUrl(tmp)) {
        if (!(tmp.startsWith('https://') || tmp.startsWith('http://'))) { tmp = 'http://' + tmp; };
        realloc = new URL(tmp);
      } else realloc = tmp;
    }
    if(_0x52b208.includes(realloc?.hostname)) { var appelm = document.createElement('div'); appelm.className = "app"; document.getElementById("app-container").appendChild(appelm); return; }
      var appelm = document.createElement("div")
      appelm.className = "app"
      appelm.setAttribute("onclick", 'openapp(' + '"' + location + '"' + ')')

      document.getElementById("app-container").appendChild(appelm)

      var imageelm = document.createElement("img")
      imageelm.className = "appimg"
      imageelm.src = element.image
      document.getElementsByClassName("app")[index].appendChild(imageelm)

      var titleelm = document.createElement("div")
      titleelm.innerText = element.title
      titleelm.className = "appinfo"
      document.getElementsByClassName("app")[index].appendChild(titleelm)
  })
}

fetchapps()


document.getElementById("appframe").addEventListener("load", function () {
  var navtitle = document.getElementById("nav-title")
  var navicon = document.getElementById("nav-icon")

  try {
    var frameLocation = this.contentWindow.location.toString()
    var initTitle = this.contentWindow.document.title
    if (frameLocation == "about:blank") {
      return {
        name: navtitle.innerText = "Loading...",
        favicon: navicon.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJjNS41MiAwIDEwIDQuNDggMTAgMTBzLTQuNDggMTAtMTAgMTBTMiAxNy41MiAyIDEyIDYuNDggMiAxMiAyek00IDEyaDQuNGMzLjQwNy4wMjIgNC45MjIgMS43MyA0LjU0MyA1LjEyN0g5LjQ4OHYyLjQ3YTguMDA0IDguMDA0IDAgMDAxMC40OTgtOC4wODNDMTkuMzI3IDEyLjUwNCAxOC4zMzIgMTMgMTcgMTNjLTIuMTM3IDAtMy4yMDYtLjkxNi0zLjIwNi0yLjc1aC0zLjc0OGMtLjI3NC0yLjcyOC42ODMtNC4wOTIgMi44Ny00LjA5MiAwLS45NzUuMzI3LTEuNTk3LjgxMS0xLjk3QTguMDA0IDguMDA0IDAgMDA0IDEyeiIgZmlsbD0iIzNDNDA0MyIvPjwvc3ZnPg=="
      }
    }
  } catch (e) {
    return {
      name: navtitle.innerText = "Failed to load title",
      favicon: navicon.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJjNS41MiAwIDEwIDQuNDggMTAgMTBzLTQuNDggMTAtMTAgMTBTMiAxNy41MiAyIDEyIDYuNDggMiAxMiAyek00IDEyaDQuNGMzLjQwNy4wMjIgNC45MjIgMS43MyA0LjU0MyA1LjEyN0g5LjQ4OHYyLjQ3YTguMDA0IDguMDA0IDAgMDAxMC40OTgtOC4wODNDMTkuMzI3IDEyLjUwNCAxOC4zMzIgMTMgMTcgMTNjLTIuMTM3IDAtMy4yMDYtLjkxNi0zLjIwNi0yLjc1aC0zLjc0OGMtLjI3NC0yLjcyOC42ODMtNC4wOTIgMi44Ny00LjA5MiAwLS45NzUuMzI3LTEuNTk3LjgxMS0xLjk3QTguMDA0IDguMDA0IDAgMDA0IDEyeiIgZmlsbD0iIzNDNDA0MyIvPjwvc3ZnPg=="
    }
  }

  setTabTitle(initTitle)
  var initFavicon = null;
  var icon = this.contentWindow.document.querySelector("link[rel='icon']") || null
  var shortcuticon = this.contentWindow.document.querySelector("link[rel='shortcut icon']") || null
  if (icon) {
    initFavicon = new URL(this.contentWindow.document.querySelector("link[rel='icon']").getAttribute("href"), this.contentWindow.document.baseURI).toString();
  } else if (shortcuticon) {
    initFavicon = new URL(this.contentWindow.document.querySelector("link[rel='shortcut icon']").getAttribute("href"), this.contentWindow.document.baseURI).toString();
  }
  if (initFavicon == this.contentWindow.document.baseURI) {
    initFavicon = null
  }
  setTabIcon(initFavicon)
})

// Go UI
var gosurf = localStorage.getItem("go") || "default"
document.body.setAttribute("go", gosurf)
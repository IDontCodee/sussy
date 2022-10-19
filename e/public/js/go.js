var useRHO
var useCO
var useSW
var useST

if (__sussy$.config.usingPort) {
  useRHO = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + __sussy$.config._rho
  useCO = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + __sussy$.config._co
  useSW = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + __uv$config.prefix
  useST = window.location.protocol + "//" + window.location.hostname + window.location.port + ":"
} else {
  useRHO = window.location.protocol + "//" + window.location.hostname + __sussy$.config._rho
  useCO = window.location.protocol + "//" + window.location.hostname + __sussy$.config._co
  useSW = window.location.protocol + "//" + window.location.hostname + __uv$config.prefix
  useST = window.location.protocol + "//" + window.location.hostname
}

if ('serviceWorker' in navigator) {
  window.navigator.serviceWorker.register('/sw-handler.js', { scope: __uv$config.prefix })
}

var Stomp = new StompBoot({
  bare_server: __sussy$.config.sus_server,
  directory: "/stomp/",
  loglevel: StompBoot.LOG_ERROR,
  codec: StompBoot.CODEC_XOR
})

var StompSearch = new StompBoot.SearchBuilder("https://duckduckgo.com/?q=%s")

function searchurl(url) {
  var search = localStorage.getItem("search")
  if (search == "DuckDuckGo") {
    pxyopen("https://duckduckgo.com/?q=" + url)
  } else if (search == "Brave") {
    pxyopen("https://search.brave.com/search?q=" + url)
  } else if(search == "Google") {
    pxyopen("https://google.com/search?q=" + url)
  } else {
    console.log("[sussy] Error with search, defaulting back to DDG")
    localStorage.setItem("search", "DuckDuckGo")
    pxyopen("https://duckduckgo.com/?q=" + url)
  }
}

function getUsingForURI(url) {
  var using = localStorage.getItem("__sussy$using")
  if (using == "usingRHO") {
    return useRHO + url
  } else if (using == "usingCO") {
    return useCO + url
  } else if (using == "usingSW") {
    return useSW + __uv$config.encodeUrl(url)
  } else if (using == "usingST") {
    return useST + Stomp.html(StompSearch.query(url))
  }
}

function pxyopen(url) {
  if (localStorage.getItem("__sussy$using") !== null) {
    var surf = document.getElementById("surf");
    var closesurf = document.getElementById("closesurf");
    var reloadsurf = document.getElementById("reloadsurf");
    var controls = document.getElementById("controls");
    controls.style.display = "flex";
    surf.style.display = "initial";
    closesurf.style.display = "initial";
    reloadsurf.style.display = "initial";
    surf.setAttribute("src", getUsingForURI(url));
    document.getElementById("search").value = "";
    // page.open()
  }
}


function go(url) {
  if (url !== '') {
    if (url.includes('.')) {
      pxyopen("http://" + url)
    } else if (url.startsWith('https://')) {
      pxyopen(url)
    } else if (url.startsWith('http://')) {
      pxyopen(url)
    } else {
      searchurl(url)
    }
  } else {
    if(search == "Brave") {
      pxyopen("https://search.brave.com/")
    } else if(search == "Google") {
      pxyopen("https://google.com/")
    } else {
      pxyopen("https://duckduckgo.com/")
    }
  }
}

window.onload = function () {
  search = document.getElementById("search");
  search.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      go(search.value)
    }
  });
};

function closesurf() {
  var surf = document.getElementById("surf");
  var closesurf = document.getElementById("closesurf");
  var reloadsurf = document.getElementById("reloadsurf");
  var controls = document.getElementById("controls");
  var navtitle = document.getElementById("nav-title");
  controls.style.display = "none";
  surf.style.display = "none";
  closesurf.style.display = "none";
  reloadsurf.style.display = "none";
  surf.setAttribute("src", "");
  navtitle.innerText = "Loading..."
}

function reloadsurf() {
  var surf = document.getElementById("surf");
  surf.contentWindow.location.reload()
}

function fullscreensurf() {
  var surf = document.getElementById("surf");
  surf.contentWindow.location.reload()
}

var currentproxy = localStorage.getItem("__sussy$using")


/*
usingRHO
usingCO
usingSW
usingST
*/
var rho = document.getElementById("usingRHO")
var co = document.getElementById("usingCO")
var sw = document.getElementById("usingSW")
var st = document.getElementById("usingST")

if (localStorage.getItem("__sussy$using") !== null) {
  document.getElementById(localStorage.getItem("__sussy$using")).classList.add("proxysel")
}

function setUsing(using) {
  localStorage.setItem("__sussy$using", using)
  if (using == "usingRHO") {
    rho.classList.add("proxysel")
    co.classList.remove("proxysel")
    sw.classList.remove("proxysel")
    st.classList.remove("proxysel")
  } else if (using == "usingCO") {
    rho.classList.remove("proxysel")
    sw.classList.remove("proxysel")
    co.classList.add("proxysel")
    st.classList.remove("proxysel")
  } else if (using == "usingSW") {
    rho.classList.remove("proxysel")
    co.classList.remove("proxysel")
    sw.classList.add("proxysel")
    st.classList.remove("proxysel")
  } else if (using == "usingST") {
    console.warn("That feels like a bad idea...")
    rho.classList.remove("proxysel")
    co.classList.remove("proxysel")
    sw.classList.remove("proxysel")
    st.classList.add("proxysel")
  }
}

function hidesugg() {
  document.getElementById("omnibox").style.borderRadius = "5px";
  document.getElementById("suggestions").style.display = "none";
}

function showsugg() {
  document.getElementById("omnibox").style.borderRadius = "5px 5px 0 0";
  document.getElementById("suggestions").style.display = "inherit"
}

function sugggo(suggtext) {
  if (localStorage.getItem("__sussy$using") !== null) {
    go(suggtext)
    document.getElementById("search").value = ""
    hidesugg()
  }
}

window.addEventListener("load", function () {
  var search = document.getElementById("search")
  search.addEventListener("keyup", function (event) {
    event.preventDefault()
    if (event.keyCode == 13)
      if (this.value !== "") {
        go(this.value)
        this.value = ""
      }
  });

  search.addEventListener("keyup", function (event) {
    event.preventDefault()
    if (search.value.trim().length !== 0) {
      document.getElementById("suggestions").innerText = ""
      showsugg()
      async function getsuggestions() {
        var term = search.value || "";
        var response = await fetch("/suggestions?q=" + term);
        var result = await response.json();
        var suggestions = result.slice(0, 8);
        for (sugg in suggestions) {
          var suggestion = suggestions[sugg]
          var sugg = document.createElement("div")
          sugg.innerText = suggestion
          sugg.setAttribute("onclick", "sugggo(this.innerText)")
          sugg.className = "sugg"
          document.getElementById("suggestions").appendChild(sugg)
        }
      }
      getsuggestions()
    } else {
      hidesugg()
    }
  });

  search.addEventListener("click", function (event) {
    if (search.value.trim().length !== 0) {
      showsugg()
    }
  })

})

function hidesuggclick() {
  if (window.event.srcElement.id !== "search" && window.event.srcElement.id !== "suggestions" && window.event.srcElement.className !== "sugg") {
    hidesugg()
  }
}

document.onclick = hidesuggclick

function fullscreensurf() {
  var surf = document.getElementById("surf")
  surf.requestFullscreen()
}

function setTabTitle(title) {
  if (title) {
    var navtitle = document.getElementById("nav-title")
    navtitle.innerText = title
  } else {
    var navtitle = document.getElementById("nav-title")
    var surf = document.getElementById("surf")
    navtitle.innerText = surf.contentWindow.location.host
  }
}

function setTabIcon(favicon) {
  if (favicon) {
    var navicon = document.getElementById("nav-icon")
    navicon.src = favicon
  } else {
    var navicon = document.getElementById("nav-icon")
    navicon.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJjNS41MiAwIDEwIDQuNDggMTAgMTBzLTQuNDggMTAtMTAgMTBTMiAxNy41MiAyIDEyIDYuNDggMiAxMiAyek00IDEyaDQuNGMzLjQwNy4wMjIgNC45MjIgMS43MyA0LjU0MyA1LjEyN0g5LjQ4OHYyLjQ3YTguMDA0IDguMDA0IDAgMDAxMC40OTgtOC4wODNDMTkuMzI3IDEyLjUwNCAxOC4zMzIgMTMgMTcgMTNjLTIuMTM3IDAtMy4yMDYtLjkxNi0zLjIwNi0yLjc1aC0zLjc0OGMtLjI3NC0yLjcyOC42ODMtNC4wOTIgMi44Ny00LjA5MiAwLS45NzUuMzI3LTEuNTk3LjgxMS0xLjk3QTguMDA0IDguMDA0IDAgMDA0IDEyeiIgZmlsbD0iIzNDNDA0MyIvPjwvc3ZnPg=="
  }
}

surf.addEventListener("load", function () {
  var navtitle = document.getElementById("nav-title")
  var navicon = document.getElementById("nav-icon")

  if (surf.contentWindow.location.toString() == "about:blank") {
    return {
      name: navtitle.innerText = "Loading...",
      favicon: navicon.src = ""
    };
  }

  var initTitle = surf.contentWindow.document.title
  setTabTitle(initTitle)

  var initFavicon = null;
  var icon = surf.contentWindow.document.querySelector("link[rel='icon']") || null
  var shortcuticon = surf.contentWindow.document.querySelector("link[rel='shortcut icon']") || null
  if (icon) {
    initFavicon = new URL(surf.contentWindow.document.querySelector("link[rel='icon']").getAttribute("href"), surf.contentWindow.document.baseURI).toString();
  } else if (shortcuticon) {
    initFavicon = new URL(surf.contentWindow.document.querySelector("link[rel='shortcut icon']").getAttribute("href"), surf.contentWindow.document.baseURI).toString();
  }
  if (initFavicon == surf.contentWindow.document.baseURI) {
    initFavicon = null
  }
  setTabIcon(initFavicon)
})

var gosurf = localStorage.getItem("go") || "default"
document.body.setAttribute("go", gosurf)
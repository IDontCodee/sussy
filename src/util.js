/*global __uv$config, __sussy$config */
import { stomp, swSupported } from "./proxy.js";

export function getSearchEngine() {
  var engine = localStorage.getItem("engine");

  switch (engine) {
    case "Brave":
      return "https://search.brave.com/search?q=";
    case "Google":
      return "https://www.google.com/search?a=";
    default:
      case "DuckDuckGo":
        return "https://duckduckgo.com/?q=";
  }
}

function searchURL(url) {
  if (url.match(/^https?:\/\//)) {
    return url;
  } else if (url.includes(".") && !url.includes(" ")) {
    return "https://" + url;
  } else {
    return getSearchEngine() + encodeURIComponent(url);
  }
}

export function getLink(url, morestuff) {
  if(morestuff) return (__sussy$config?.moreStuffURI || "example.com")
  if(url.startsWith('/')) return url; // A local file
  var type = localStorage.getItem("type") || "Ultraviolet";
  if (!swSupported && type !== "Corrosion")
    throw new Error("Your browser doesn't support service workers.");

  url = searchURL(url)

  switch (type) {
    case "Stomp":
      return new URL(stomp.html(url), global.location).toString();
    case "Corrosion":
      return new URL(
        __uv$config.encodeUrl(url),
        new URL(__sussy$config._co, global.location)
      ).toString();
    default:
    case "Rhodium":
      return new URL(__uv$config.encodeUrl(url), new URL(__sussy$config._rho, global.location))
    case "Ultraviolet":
      return "/data-load-uv.html#" + btoa(url);
  }
}

export function getWindowLocation(page) {
  var [type] = localStorage.getItem("type") || "Ultraviolet";

  var pageURL = page.contentWindow.location.toString();

  try {
    switch (type) {
      case "Ultraviolet":
        pageURL = page.contentWindow.__uv$location.toString();
        break;
      case "Stomp":
        pageURL = page.contentWindow.tc$.access
          .get2(page.contentWindow, "location", "(window.location)")
          .toString();
      break;
      case "Corrosion":
        pageURL = page.contentWindow.location.toString();
      break;
      case "Rhodium":
        pageURL = page.contentWindow.location.toString();
        break;
      default:
        pageURL = page.contentWindow.__uv$location.toString();
      break;
    }
  } catch(err) {}
  return pageURL;
}

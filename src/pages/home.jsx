/*global __sussy$config */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import Proxy from "../components/proxy.jsx";
import BareClient from "@tomphttp/bare-client";
import { bareServerURL } from "../consts.js";
import { getLink, fetchJSON } from "../util.js";

import { ProxyOption } from "../components/SettingsButtons.jsx";
import Obfuscate from "../components/obfuscate.jsx";

function Home() {
  const [data, setData] = React.useState();
  React.useEffect(() => { fetchJSON("/URIconfig", setData) }, []);

  function loadDC() {
    window.open(data.DC, '_blank');
  };

  function loadGC() {
    window.open(__sussy$config.GCURI, '_blank');
  }
  
  var proxy = React.useRef();

  var [suggestions, setSuggestions] = React.useState([]);

  const bare = React.useMemo(() => new BareClient(bareServerURL), []);

  var omniboxcontainer = React.useRef();

  var suggestionsChildren = React.useRef();

  var omnibox = React.useRef();

  function showOmnibox() {
    if (!omniboxcontainer.current) return;

    if (!omniboxcontainer.current.hasAttribute("open")) {
      omniboxcontainer.current.setAttribute("open", "");
    }
  }

  function hideOmnibox() {
    if (!omniboxcontainer.current) return;

    if (omniboxcontainer.current.hasAttribute("open")) {
      omniboxcontainer.current.removeAttribute("open");
    }
  }

  async function updateOmnibox(query) {
    let results = [];

    try {
      var site = await bare.fetch("https://duckduckgo.com/ac/?q=" + query + "&type=list");
      results = await site.json();
      results = await results[1];
    } catch (err) {
      console.warn('There was a error while updating the omnibox:');
      console.error(err);
      results = [];
    }
    setSuggestions(results);
    if (suggestionsChildren.current.children.length === 0) {
      hideOmnibox();
    } else {
      showOmnibox();
    }
  }

  function submit(value) {
    try {
      proxy.current.open({ url: getLink(value) });
    } catch (err) {
      console.error(err);
      alert(err.toString());
    }
  }

  async function searchType(e) {  
    if (e.key === "Enter") return submit(e.target.value);

    if (e.target.value && e.target.value !== "") {
      updateOmnibox(e.target.value);
      showOmnibox();
    } else {
      hideOmnibox();
      setSuggestions([]);
    }
  }

  window.addEventListener("click", function (e) {
    if (!omniboxcontainer.current) return;

    if (
      e.target.className !== "omnibox" &&
      e.target.className !== "search" &&
      e.target.className !== "searchicon" &&
      e.target.className !== "suggestions" &&
      e.target.className !== "sugg"
    ) {
      if (omniboxcontainer.current.hasAttribute("open")) {
        hideOmnibox();
        setSuggestions([]);
      }
    } else {
      if (e.target.value && e.target.value !== "") {
        updateOmnibox(e.target.value);
        showOmnibox();
      } else {
        hideOmnibox();
        setSuggestions([]);
      }
    }
  });

  return (
    <>
      <Head defaultTitle="sussy"></Head>
      <Proxy ref={proxy} />
      <Nav />
      <div className="hometitle">
        sussy
      </div>
      <div ref={omniboxcontainer} className="omniboxcontainer">
        <div ref={omnibox} className="omnibox">
          <div className="searchicon">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
          <input
            onKeyUp={searchType}
            autoComplete="off"
            autoFocus
            id="search"
            className="search"
            placeholder="Search or Type URL"
          />
        </div>
        <div ref={suggestionsChildren} className="suggestions">
          {suggestions.map((item, i) => (
            <div
              key={i}
              className="sugg"
              onClick={(e) => submit(e.target.textContent)}
              dangerouslySetInnerHTML={{ __html: item }}
            ></div>
          ))}
        </div>
        <div className="chooseoption" style={{ margin: 'auto' }}>
        <ProxyOption type="Ultraviolet">
          <Obfuscate>Ultraviolet</Obfuscate>
        </ProxyOption>
        <ProxyOption type="Stomp">
          <Obfuscate>Stomp</Obfuscate>
        </ProxyOption>
        <ProxyOption type="Corrosion">
          <Obfuscate>Corrosion</Obfuscate>
        </ProxyOption>
        <ProxyOption type="Rhodium">
          <Obfuscate>Rhodium</Obfuscate>
        </ProxyOption>
        </div>
      </div>
      <div className="iconFooter">
        <div className="footer-icons">
            <a className="footericon" onClick={loadGC}><i className="fab fa-google"></i></a>
            <a className="footericon" onClick={loadDC}><i className="fab fa-discord"></i></a>
        </div>
      </div>
      <div className="footer">
        <div className="footermiddle">
        </div>
        <div>
        <Link className="footersides link" to="/support">FAQ</Link>
        <Link className="footersides link" to="/credits">Credits</Link>
        <a className="footersides">Sus Network 2022 - {new Date().getFullYear()}</a>
        </div>
      </div>
    </>
  );
}

export default Home;
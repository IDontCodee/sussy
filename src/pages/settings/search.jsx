import clsx from "clsx";
import React from "react";
import Obfuscate from "../../components/obfuscate.jsx";
import { useLocalEngine, useLocalProxy, useLocalControls } from "../../settings.js";

function EngineOption({ type, children }) {
  var [localEngine, setLocalEngine] = useLocalEngine();

  return (
    <div
      onClick={() => {
        setLocalEngine(type);
      }}
      className={clsx("optionchoose", type === localEngine && "chooseactive")}
    >
      {children}
    </div>
  );
}

function ProxyOption({ type, children }) {
  var [localProxy, setLocalProxy] = useLocalProxy();

  return (
    <div
      onClick={() => {
        setLocalProxy(type);
      }}
      className={clsx("optionchoose", type === localProxy && "chooseactive")}
    >
      {children}
    </div>
  );
}

function Search() {
  return (
    <>
      <div className="optiontitle">
        <Obfuscate>Proxy</Obfuscate>
      </div>
      <div className="chooseoption">
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
      <div className="optiontitle">
        <Obfuscate>Search Engine</Obfuscate>
      </div>
      <div className="chooseoption">
      <EngineOption type="DuckDuckGo">
          <Obfuscate>DuckDuckGo</Obfuscate>
        </EngineOption>
        <EngineOption type="Brave">
          <Obfuscate>Brave</Obfuscate>
        </EngineOption>
        <EngineOption type="Google">
          <Obfuscate>Google :(</Obfuscate>
        </EngineOption>
      </div>
    </>
  );
}

export default Search;

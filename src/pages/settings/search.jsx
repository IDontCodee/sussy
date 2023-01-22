import React from "react";
import Obfuscate from "../../components/obfuscate.jsx";
import { EngineOption, ProxyOption } from "../../components/SettingsButtons.jsx";

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

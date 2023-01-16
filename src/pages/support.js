import React from "react";
import Nav from "../components/nav.js";
import Head from "../components/head.js";
import Obfuscate from "../components/obfuscate.js";

/*
  <div className="itemtitle">
    <Obfuscate>Title.</Obfuscate>
  </div>
  <div className="itemtext">
    <Obfuscate>
      Desc.
    </Obfuscate>
  </div>
*/
function Support() {
  return (
    <>
      <Head defaultTitle="Support | sussy"></Head>
      <Nav />
      <div className="itemscontainer">
        <div className="itemsection">
          <Obfuscate>FAQ</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>The proxy is not loading</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>
            If you see an error page try reloading the website. If the website
            is not supported there is nothing we can do.
          </Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>What proxy shoud I use?</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>
          TOMP based proxies (such as Ultraviolet and Stomp) has support for most sites you will visit, but there are issues with some sites (such as GitHub).
          Use Corrosion for those sites
          </Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>Captcha not working/issues</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Captcha is supported on Ultraviolet and Corrosion, though the support may be limited on Corrosion</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>What is Stomp?</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>
          Stomp does not work on firefox and has some bugs and is worse then Ultraviolet.
          Just don't use it if you don't have too.
          </Obfuscate>
        </div>
      </div>
    </>
  );
}

export default Support;
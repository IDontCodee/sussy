import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import Obfuscate from "../components/obfuscate.jsx";

function Error() {
  return (
    <>
      <Head defaultTitle="404"></Head>
      <Nav />
      <div className="title">
        404 Error
      </div>
      <div className="desc">
        <Obfuscate>
          This requested page {window.location.pathname} does not exist.
        </Obfuscate>
        <br />
        <Obfuscate>Visit the </Obfuscate>
        <Link className="link" to="/support">
          <Obfuscate>support</Obfuscate>
        </Link>
        <Obfuscate> page for help.</Obfuscate>
      </div>
    </>
  );
}

export default Error;

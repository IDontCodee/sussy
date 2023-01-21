/* global __sussy$ */
import React from "react";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import { getLink } from "../util.js";

import { useQuery, gql } from '@apollo/client';

import RefreshIcon from "@mui/icons-material/Refresh";
import "../style/controls.css";

var Proxy = React.forwardRef((props, ref) => {
  var web = React.createRef();
  var [config, setConfig] = React.useState();
  // config.preferControl
  React.useImperativeHandle(
    ref,
    () => ({
      open: (config) => {
        document.body.style.overflow = "hidden";
        setConfig({
          url: config.url
        });
      }
    })
  );

  document.getElementsByTagName("body")[0].setAttribute("controls", "classic"); // force controls
  if(!config) return;
  return (
    <>
      <div className="controls">
        <div
          className="controlsButton"
          style={{ top: "70px", position: "fixed" }}
          onClick={() => {
            try {
              web.current.contentWindow.location.reload();
            } catch (err) {}
          }}
        >
          <RefreshIcon />
        </div>
      </div>
      <iframe
        ref={web}
        className="chatbox"
        src={config.url}
      ></iframe>
    </>
  );
});

function Chatbox() {
  let { data } = useQuery(gql`
  query URIconfig {
    URIconfig {
      WD
    }
  }
  `);
  var proxy = React.useRef();
  try {
    if(data) proxy.current.open({ url: getLink(data.URIconfig.WD) });
  } catch(err) {
    console.warn('Could not load chatbox');
    console.warn(err);
    alert('There was a error loading the chatbox. Try again in a couple seconds.');
  };
  return (
    <>
      <Head defaultTitle="Chatbox | sussy"></Head>
      <Nav />
      <Proxy ref={proxy} />
    </>
  );
}

export default Chatbox;
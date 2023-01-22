/* global __sussy$ */
import React from "react";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import { getLink, fetchJSON } from "../util.js";

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
  const [data, setData] = React.useState();
  React.useEffect(() => { fetchJSON("/URIconfig", setData) }, []);
  var proxy = React.useRef();
  try {
    if(data) proxy.current.open({ url: getLink(data.CH) });
  } catch(err) {
    console.warn('Could not load chatbox');
    console.error(err);
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
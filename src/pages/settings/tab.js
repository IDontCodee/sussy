import React from "react";
import Obfuscate from "../../components/obfuscate.js";
import ClearIcon from "@mui/icons-material/Clear";
import BareClient from "@tomphttp/bare-client";
import { useLocalIcon, useLocalTitle } from "../../settings.js";
import { bareServerURL } from "../../consts.js";

function Tab() {
  const bare = React.useMemo(() => new BareClient(bareServerURL), []);

  var url = React.useRef();
  var [localTitle, setLocalTitle] = useLocalTitle();
  var [localIcon, setLocalIcon] = useLocalIcon();

  function tabReset() {
    document.title = "Settings | sussy";
    url.current.value = "";
    setLocalTitle(null);
    setLocalIcon(null);
  }

  async function setTab(url) {
    if (url == null || url === "") {
      return tabReset();
    }
    var title = url;
    var favicon = "";
    var site = await bare.fetch(url);
    var code = await site.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(code, "text/html");
    if (doc.getElementsByTagName("title")[0]) {
      title = doc.getElementsByTagName("title")[0].innerText;
    }
    const iconElement = doc.querySelector(
      "link[rel='shortcut icon'],link[rel*='icon']"
    );
    if (iconElement) {
      favicon = iconElement.href;
    }
    setLocalTitle(title);
    setLocalIcon(favicon);
    url.current.value = "";
  }

  function ChangeIcon({ title, icon }) {
    return (
      <div
        onClick={() => {
          setLocalTitle(title);
          setLocalIcon(icon);
        }}
        className="optionchoosecircle"
      >
        <img style={{ pointerEvents: "none" }} src={icon} alt={title} />
      </div>
    );
  }

  return (
    <>
      <div className="optiontitle">
        <Obfuscate>Presets</Obfuscate>
      </div>
      <div className="chooseoption">
        <div className="optionchoosecircle" onClick={tabReset}>
          <ClearIcon style={{ pointerEvents: "none" }} fontSize="medium" />
        </div>
        <ChangeIcon icon="https://www.google.com/favicon.ico" title="Google" />
        <ChangeIcon
          icon="https://www.drive.google.com/favicon.ico"
          title="Google Drive"
        />
        <ChangeIcon
          icon="https://edpuzzle.imgix.net/favicons/favicon-32.png"
          title="EdPuzzle"
        />
        <ChangeIcon icon="https://st1.zoom.us/zoom.ico" title="Zoom" />
        <ChangeIcon
          icon="https://www.khanacademy.org/favicon.ico"
          title="Khan Academy"
        />
      </div>
      <div className="optiontitle">
        <Obfuscate>By URL</Obfuscate>
      </div>
      <input
        autoComplete="off"
        placeholder="Enter a URL"
        className="optionchooseinput"
        ref={url}
        onChange={(e) => setTab(url.current.value)}
      />
      <div className="optiontitle">
        <Obfuscate>Advanced</Obfuscate>
      </div>
      <input
        autoComplete="off"
        placeholder="Enter a title"
        className="optionchooseinput"
        onKeyUp={(e) => setLocalTitle(e.target.value)}
        value={localTitle}
        onChange={(e) => setLocalTitle(e.target.value)}
      />
      <input
        autoComplete="off"
        placeholder="Enter an icon URL"
        className="optionchooseinput"
        onKeyUp={(e) => setLocalIcon(e.target.value)}
        value={localIcon}
        onChange={(e) => setLocalIcon(e.target.value)}
      />
      <div className="optiontitle">
        <Obfuscate>about:blank cloak</Obfuscate>
      </div>
      <div className="chooseoption">
        <div
          onClick={() => {
            /*
            The about:blank script is based off of ABC by
              _____             _   _      _                      _    
             |  ___|__   __ _  | \ | | ___| |___      _____  _ __| | __
             | |_ / _ \ / _` | |  \| |/ _ \ __\ \ /\ / / _ \| '__| |/ /
             |  _| (_) | (_| | | |\  |  __/ |_ \ V  V / (_) | |  |   < 
             |_|  \___/ \__, | |_| \_|\___|\__| \_/\_/ \___/|_|  |_|\_\  
            */
          try {
            var page = window.open();
            page.document.body.innerHTML = `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + window.location.href + `"></iframe>`;
            window.location.replace('https://google.com');
          } catch {}
          }}
          className="optionchoose chooseactive">Go about:blank
        </div>
      </div>
    </>
  );
}

export default Tab;

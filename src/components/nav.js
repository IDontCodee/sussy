import React from "react";
import { Link } from "react-router-dom";
import { useLocalAppearance } from "../settings.js";

// Icons
import AppsIcon from "@mui/icons-material/Apps";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';

// Logos
import { ReactComponent as MetallicLogo } from "../assets/metallicLogo.svg";
import { ReactComponent as TsunamiSVG } from "../assets/tsunamiLogo.svg";
import { ReactComponent as BananaSVG } from "../assets/bananaLogo.svg";

function Nav() {
  var [localAppearance] = useLocalAppearance();
  
  return (
    <div className="nav">
      <Link className="homenav" to="/">
      {localAppearance === "tsunami" ? (
          <TsunamiSVG />
        ) : localAppearance === "banana" ? (
          <BananaSVG />
        ) : localAppearance === "metallic" ? (
          <MetallicLogo fill="var(--highlight)" />
        ) : (
          <div className="navname">sussy</div>
        )}
      </Link>
      <div className="navitems">
      <Link className="navitem" to="/">
          <HomeIcon />
        </Link>
        <Link className="navitem" to="/apps">
          <AppsIcon />
        </Link>
        <Link className="navitem" to="/arcade">
          <VideogameAssetIcon />
        </Link>
        <Link className="navitem" to="/chat">
          <ChatIcon />
        </Link>
        <Link className="navitem" to="/settings/tab">
          <SettingsIcon />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
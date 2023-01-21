import React from "react";
import { Link } from "react-router-dom";
import { useLocalAppearance, useLocalNavbar } from "../settings.js";

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
  const icons = new Map([
    ["Home", HomeIcon],
    ["Apps", AppsIcon],
    ["Arcade", VideogameAssetIcon],
    ["Chatbox", ChatIcon],
    ["Settings", SettingsIcon]
  ])
  var [localAppearance] = useLocalAppearance();
  const [localNavbar] = useLocalNavbar();
  function NavbarItem({ name, to }) {
    const string = () => ( <a>{name}</a>);
    const Navcomponent = localNavbar == "icons" ? icons.get(name) : string;
    return (
      <Link className="navitem" to={to}>
        <Navcomponent></Navcomponent>
      </Link>
    )
  }
  
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
        <NavbarItem to="/" name="Home"></NavbarItem>
        <NavbarItem to="/apps" name="Apps"></NavbarItem>
        <NavbarItem to="/arcade" name="Arcade"></NavbarItem>
        <NavbarItem to="/chat" name="Chatbox"></NavbarItem>
        <NavbarItem to="/settings/tab" name="Settings"></NavbarItem>
      </div>
    </div>
  );
}

export default Nav;
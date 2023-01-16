import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./components/nav.js";
import Head from "./components/head.js";
import Obfuscate from "./components/obfuscate.js";
import clsx from "clsx";

function Tab({ to, children }) {
  const location = useLocation();

  return (
    <Link to={to}>
      <div
        className={clsx(
          "settingssidecard",
          location.pathname === to && "settingssidecardsel"
        )}
      >
        <Obfuscate>{children}</Obfuscate>
      </div>
    </Link>
  );
}

export default function SettingsLayout({ children }) {
  return (
    <>
      <Head defaultTitle="Settings | sussy"></Head>
      <Nav settings />
      <div className="settingssidebar">
        <div className="settingssidetitle">
          Settings
        </div>
        <Tab to="/settings/tab">
          <Obfuscate>Tab</Obfuscate>
        </Tab>
        <Tab to="/settings/search">
          <Obfuscate>Search</Obfuscate>
        </Tab>
        <Tab to="/settings/appearance">
          <Obfuscate>Appearance</Obfuscate>
        </Tab>
        <Tab to="/settings/ui">
          <Obfuscate>UI</Obfuscate>
        </Tab>
        <Tab to="/settings/app">
          <Obfuscate>App</Obfuscate>
        </Tab>
      </div>
      <div className="settingsapp">{children}</div>
    </>
  );
}
import React from "react";
import Obfuscate from "../../components/obfuscate.jsx";
import { ControlsOption, RoundingOption, NavbarOption } from "../../components/SettingsButtons.jsx";

function UI() {
  return (
    <>
      <div className="optiontitle">
        <Obfuscate>Controls</Obfuscate>
      </div>
      <div className="chooseoption">
        <ControlsOption type="default">
          <Obfuscate>Default</Obfuscate>
        </ControlsOption>
        <ControlsOption type="modern">
          <Obfuscate>Modern</Obfuscate>
        </ControlsOption>
        <ControlsOption type="classic">
          <Obfuscate>Classic</Obfuscate>
        </ControlsOption>
      </div>
      <div className="optiontitle">
        <Obfuscate>Rounding</Obfuscate>
      </div>
      <div className="chooseoption">
        <RoundingOption type="default">
          <Obfuscate>Default</Obfuscate>
        </RoundingOption>
        <RoundingOption type="square">
          <Obfuscate>Square</Obfuscate>
        </RoundingOption>
        <RoundingOption type="fancy">
          <Obfuscate>Fancy</Obfuscate>
        </RoundingOption>
        <RoundingOption type="circle">
          <Obfuscate>Circle</Obfuscate>
        </RoundingOption>
      </div>
      <div className="optiontitle">
        <Obfuscate>Navbar</Obfuscate>
      </div>
      <div className="chooseoption">
        <NavbarOption type="icons">
          <Obfuscate>Icons</Obfuscate>
        </NavbarOption>
        <NavbarOption type="text">
          <Obfuscate>Text</Obfuscate>
        </NavbarOption>
      </div>
    </>
  );
}

export default UI;
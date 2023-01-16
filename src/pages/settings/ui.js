import clsx from "clsx";
import React from "react";
import Obfuscate from "../../components/obfuscate.js";
import { useLocalControls, useLocalRounding } from "../../settings.js";


function ControlsOption({ type, children }) {
  const [localControls, setLocalControls] = useLocalControls();

  return (
    <div
      onClick={() => {
        setLocalControls(type);
      }}
      className={clsx("optionchoose", type === localControls && "chooseactive")}
    >
      {children}
    </div>
  );
}

function RoundingOption({ type, children }) {
  const [localRounding, setLocalRounding] = useLocalRounding();

  return (
    <div
      onClick={() => {
        setLocalRounding(type);
      }}
      className={clsx("optionchoose", type === localRounding && "chooseactive")}
    >
      {children}
    </div>
  );
}

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
    </>
  );
}

export default UI;
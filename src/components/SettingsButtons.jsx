import clsx from "clsx";

import {
    useLocalEngine,
    useLocalProxy,
    useLocalAppearance,
    useLocalBackground,
    useLocalControls,
    useLocalNavbar,
    useLocalRounding,
    useLocalProxySelector
} from "../settings.js";


// search
export function EngineOption({ type, children }) {
    var [localEngine, setLocalEngine] = useLocalEngine();
  
    return (
      <div
        onClick={() => {
          setLocalEngine(type);
        }}
        className={clsx("optionchoose", type === localEngine && "chooseactive")}
      >
        {children}
      </div>
    );
};

export function ProxyOption({ type, children }) {
    var [localProxy, setLocalProxy] = useLocalProxy();
  
    return (
      <div
        onClick={() => {
          setLocalProxy(type);
        }}
        className={clsx("optionchoose", type === localProxy && "chooseactive")}
      >
        {children}
      </div>
    );
};

// appearance
export function ThemeOption({ type, children }) {
    const [localAppearance, setLocalAppearance] = useLocalAppearance();
  
    return (
      <div
        onClick={() => {
          setLocalAppearance(type);
        }}
        className={clsx(
          "optionchoose",
          type === localAppearance && "chooseactive"
        )}
      >
        {children}
      </div>
    );
};

export function BackgroundOption({ type, children }) {
    const [localBackground, setLocalBackground] = useLocalBackground();
  
    return (
      <div
        onClick={() => {
          setLocalBackground(type);
        }}
        className={clsx(
          "optionchoose",
          type === localBackground && "chooseactive"
        )}
      >
        {children}
      </div>
    );
};

// ui
export function ControlsOption({ type, children }) {
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
};

export function RoundingOption({ type, children }) {
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
};

export function NavbarOption({ type, children }) {
    const [localNavbar, setLocalNavbar] = useLocalNavbar();
  
    return (
      <div
        onClick={() => {
          setLocalNavbar(type);
        }}
        className={clsx("optionchoose", type === localNavbar && "chooseactive")}
      >
        {children}
      </div>
    );
};


export function ProxySelectionOption({ type, children }) {
  const [localPxSelector, setLocalPxSelector] = useLocalProxySelector();

  return (
    <div
      onClick={() => {
        setLocalPxSelector(type);
      }}
      className={clsx("optionchoose", type === localPxSelector && "chooseactive")}
    >
      {children}
    </div>
  );
}
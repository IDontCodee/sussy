import React from "react";
import Obfuscate from "../../components/obfuscate.js";
import { manualSave, restore } from '../../fileStore.js';


function doJunk(type) {
  window.alert(type)
}
function BackupButton({ type, children }) {
  return (
    <div
    onClick={() => {
      if(type == "save") return manualSave();
      if(type == "load") return restore();
    }}
    className="optionchoose"
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <div className="optiontitle">
        <Obfuscate>App</Obfuscate>
      </div>
      <div className="chooseoption">
        <div
          onClick={() => {
            alert('__sussy$pwaAppPrompt')
          }}
          className="optionchoose chooseactive">Install
        </div>
      </div>
      <div className="optiontitle">
        <Obfuscate>Backups</Obfuscate>
      </div>
      <div className="chooseoption">
        <BackupButton type="load">Load from File</BackupButton>
        <BackupButton type="save">Manually save to file</BackupButton>
      </div>
      <div className="optiontitle">
        <Obfuscate>Reset</Obfuscate>
      </div>
      <div className="chooseoption">
        <div
          onClick={() => {
            if(window.confirm('Are you sure you want to reset all settings?')) {
              alert('__sussy$resetSettings')
              window.location.reload()
            }
          }}
          className="optionchoose">Settings
        </div>
        <div
          onClick={() => {
            if(window.confirm('Are you sure you want to reset EVERTHING? THIS CANNOT BE UNDONE!!!\n\n\n(includes all your saves as well)')) {
              alert('NO')
            }
          }}
          className="optionchoose">Everything
        </div>
      </div>
    </>
  );
}

export default App;
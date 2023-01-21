import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "../style/index.css";
import "../proxy.js";
import Background from "../components/background.jsx";
import SettingsLayout from "../SettingsLayout.jsx";
import { ObfuscateLayout } from "../components/obfuscate.jsx";

var Home = React.lazy(() => import("./home.jsx"));
var SettingsAppearance = React.lazy(() => import("./settings/appearance.jsx"));
var SettingsSearch = React.lazy(() => import("./settings/search.jsx"));
var SettingsTab = React.lazy(() => import("./settings/tab.jsx"));
var SettingsUI = React.lazy(() => import("./settings/ui.jsx"));
var SettingsPageApp = React.lazy(() => import("./settings/app.jsx"));
var Apps = React.lazy(() => import("./apps.jsx"));
var Games = React.lazy(() => import("./games.jsx"));
var Support = React.lazy(() => import("./support.jsx"));
var Credits = React.lazy(() => import("./credits.jsx"));
var Chatbox = React.lazy(() => import("./chatbox.jsx"));
var Error = React.lazy(() => import("./error.jsx"));


function App() {
  return (
    <>
      <ObfuscateLayout />
      <Background />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/settings/appearance"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsAppearance />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/search"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsSearch />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/tab"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsTab />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/ui"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsUI />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/app"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsPageApp />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/apps"
          element={
            <Suspense fallback={<></>}>
              <Apps />
            </Suspense>
          }
        />
        <Route
          path="/arcade"
          element={
            <Suspense fallback={<></>}>
              <Games />
            </Suspense>
          }
        />
        <Route
          path="/support"
          element={
            <Suspense fallback={<></>}>
              <Support />
            </Suspense>
          }
        />
        <Route
          path="/credits"
          element={
            <Suspense fallback={<></>}>
              <Credits />
            </Suspense>
          }
        />
        <Route
          path="/chat"
          element={
            <Suspense fallback={<></>}>
              <Chatbox />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<></>}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;

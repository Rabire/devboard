import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import useDefaultMode from "./hooks/useDefaultMode";
import { switchMode } from "./stores/theme";

const Productivity = lazy(() => import("./pages/Productivity"));
const Administrative = lazy(() => import("./pages/Administrative"));
const Technical = lazy(() => import("./pages/Technical"));

// TODO: add suspense while loading page

function App() {
  useDefaultMode();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" index element={<Productivity />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/administrative" element={<Administrative />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <button onClick={switchMode}>Mode</button>
    </>
  );
}

export default App;

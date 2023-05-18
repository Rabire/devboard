import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Productivity = lazy(() => import("./pages/Productivity"));
const Administrative = lazy(() => import("./pages/Administrative"));
const Technical = lazy(() => import("./pages/Technical"));

// TODO: add suspense while loading page

function App() {
  return (
    <>
      <header className="card">nav</header>

      <Routes>
        <Route path="/" index element={<Productivity />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/administrative" element={<Administrative />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

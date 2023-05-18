import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MobileMenu from "./components/MobileMenu";
import NavBar from "./components/NavBar";
import useDefaultMode from "./hooks/useDefaultMode";

const Productivity = lazy(() => import("./pages/Productivity"));
const Administrative = lazy(() => import("./pages/Administrative"));
const Technical = lazy(() => import("./pages/Technical"));

// TODO: add suspense while loading page

function App() {
  useDefaultMode();

  return (
    <>
      <MobileMenu />
      <NavBar />

      <Routes>
        <Route
          path="/"
          index
          element={
            <Suspense fallback={<>...</>}>
              <Productivity />
            </Suspense>
          }
        />

        <Route
          path="technical"
          element={
            <Suspense fallback={<>...</>}>
              <Technical />
            </Suspense>
          }
        />

        <Route
          path="administrative"
          element={
            <Suspense fallback={<>...</>}>
              <Administrative />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <Navigate to="/" />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;

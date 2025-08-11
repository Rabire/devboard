import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IntroOverlay from "./components/IntroOverlay";
import Loader from "./components/Loader";
import MobileMenu from "./components/MobileMenu";
import SideBar from "./components/SideBar";
import useSettings from "./hooks/useSettings";

const Productivity = lazy(() => import("./pages/Productivity"));
const Administrative = lazy(() => import("./pages/Administrative"));
const Technical = lazy(() => import("./pages/Technical"));

function App() {
  useSettings();

  return (
    <>
      <MobileMenu />
      <SideBar />

      <Routes>
        <Route
          path="/"
          index
          element={
            <Suspense fallback={<Loader />}>
              <Productivity />
            </Suspense>
          }
        />

        <Route
          path="technical"
          element={
            <Suspense fallback={<Loader />}>
              <Technical />
            </Suspense>
          }
        />

        <Route
          path="administrative"
          element={
            <Suspense fallback={<Loader />}>
              <Administrative />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <Navigate to="/" />
            </Suspense>
          }
        />
      </Routes>

      <IntroOverlay />
    </>
  );
}

export default App;

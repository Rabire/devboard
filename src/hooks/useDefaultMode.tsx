import { useEffect } from "react";
import { settings } from "../stores/theme";

export const updateDomMode = () => {
  const { mode } = settings.get();

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const useDefaultMode = () => {
  useEffect(() => {
    updateDomMode();
  }, []);
};

export default useDefaultMode;

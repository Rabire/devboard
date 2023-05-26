import { useEffect } from "react";
import { $settings } from "../stores/theme";

export const updateDom = () => {
  const { mode, theme } = $settings.get();

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  document.documentElement.style.setProperty("--current-theme", theme);
};

const useSettings = () => {
  useEffect(() => {
    updateDom();
  }, []);
};

export default useSettings;

import { persistentMap } from "@nanostores/persistent";
import { updateDomMode } from "../hooks/useDefaultMode";

export type SettingsValue = {
  theme: "#F00" | "#0F0" | "#00F";
  mode: "dark" | "light";
};

export const settings = persistentMap<SettingsValue>("settings:", {
  theme: "#F00",
  mode: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
});

settings.listen(() => updateDomMode());

export const switchMode = () =>
  settings.setKey("mode", settings.get().mode === "dark" ? "light" : "dark");

import { persistentMap } from "@nanostores/persistent";
import { updateDom } from "../hooks/useSettings";

export type SettingsValue = {
  theme: string;
  mode: "dark" | "light";
};

export const settings = persistentMap<SettingsValue>("settings:", {
  theme: "#86B1F9",
  mode: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
});

settings.listen(updateDom);

export const switchMode = () =>
  settings.setKey("mode", settings.get().mode === "dark" ? "light" : "dark");

export const setTheme = (newTheme: string) =>
  settings.setKey("theme", newTheme);

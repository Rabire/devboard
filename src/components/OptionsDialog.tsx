import { useEffect, useRef } from "react";
import cn from "classnames";
import { useStore } from "@nanostores/react";
import THEME_COLORS from "../utils/tailwing-config";
import { setTheme, settings, switchMode } from "../stores/theme";

const COLORS: string[] = Object.values(THEME_COLORS.theme);

type Props = { close: () => void; isOpen: boolean };

const OptionsDialog = ({ close, isOpen }: Props) => {
  const { mode, theme } = useStore(settings);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !ref.current?.contains(event.target as Node)) close();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-5 items-center",
        "absolute left-full top-1/2 -translate-y-1/2 translate-x-5",
        "bg-secondary p-5",
        "border-light dark:border-dark border-r-2 border-t-2 border-b-2 rounded-r-lg"
      )}
    >
      <button
        className={cn(
          "bg-dark text-white dark:bg-light dark:text-black",
          "whitespace-nowrap py-2 px-4 rounded-md"
        )}
        onClick={switchMode}
      >
        Theme {mode === "dark" ? "clair" : "foncé"}
      </button>

      <div className="flex gap-1">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setTheme(color)}
            className={cn(
              "bg-dev h-8 w-8 rounded-full border-black dark:border-white",
              "flex items-center justify-center",
              "transition-transform hover:scale-110"
            )}
            style={{ backgroundColor: color }}
          >
            {theme === color && (
              <img src="icons/checked-black.svg" alt="check icon" />
            )}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionsDialog;

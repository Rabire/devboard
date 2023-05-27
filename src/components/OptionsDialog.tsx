import { useEffect, useRef } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@nanostores/react";
import THEME_COLORS from "../utils/tailwing-config";
import { setTheme, $settings, switchMode } from "../stores/theme";

const COLORS: string[] = Object.values(THEME_COLORS.theme);

type Props = {
  isDialog?: true;
  close?: () => void;
  isOpen?: boolean;
};

const OptionsDialog = ({ isDialog, close = () => null, isOpen }: Props) => {
  const { mode, theme } = useStore($settings);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) close();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const show = isDialog ? isOpen : true;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={ref}
          key="options-dialog"
          className={cn(
            isDialog
              ? [
                  "flex gap-5 items-center",
                  "absolute top-1/2 -translate-y-1/2 left-full translate-x-5",
                  "bg-secondary p-5 border-light dark:border-dark",
                  "border-2 rounded-lg shadow-md overflow-hidden",
                ]
              : "mx-4"
          )}
          initial={isDialog && { width: 0, opacity: 0 }}
          animate={isDialog && { width: "auto", opacity: 1 }}
          exit={isDialog && { width: 0, opacity: 0 }}
        >
          <button
            className={cn(
              "bg-dark text-white dark:bg-light dark:text-black",
              "whitespace-nowrap py-2 px-4 rounded-md",
              !isDialog && "w-full mb-4"
            )}
            onClick={switchMode}
          >
            Theme {mode === "dark" ? "clair" : "foncé"}
          </button>

          <div className={cn("flex gap-1", !isDialog && "grid grid-cols-4")}>
            {COLORS.map((color) => (
              <motion.button
                key={color}
                onClick={() => setTheme(color)}
                className={cn(
                  "h-8 w-8 rounded-full transition-transform hover:scale-110",
                  "flex items-center justify-center"
                )}
                style={{ backgroundColor: color }}
              >
                {theme === color && (
                  <img src="icons/checked-black.svg" alt="check icon" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OptionsDialog;

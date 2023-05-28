import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import BurgerIcon from "./svg/BurgerIcon";
import useMenuVisibility from "../hooks/useMenuVisibility";
import ExitCrossIcon from "./svg/ExitCrossIcon";
import MENU_LINKS from "../static/menu-links";
import DevBoardLogo from "./DevBoardLogo";
import OptionsDialog from "./OptionsDialog";

const MobileMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const isVisible = useMenuVisibility(() => setShowModal(false));

  const location = useLocation();

  useEffect(() => setShowModal(false), [location]);

  // TODO: handle close on click outside
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          key="mobile-menu"
          className={cn(
            "fixed drop-shadow-xl z-50 bg-secondary flex flex-col overflow-hidden tablet:hidden",
            !showModal &&
              "right-3 top-3 rounded-full aspect-square border-light dark:border-dark border-2",
            !showModal && "right-3 top-3 rounded-full aspect-square",
            showModal && "rounded-none p-3 inset-0 left-auto",
            showModal ? "justify-between" : "justify-center"
          )}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
        >
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className="flex justify-end p-5"
          >
            {showModal ? <ExitCrossIcon /> : <BurgerIcon />}
          </button>

          {showModal && (
            <>
              <div className="flex justify-center">
                <DevBoardLogo size="md" pathColor="secondary" />
              </div>
              <div className="flex flex-col gap-3 text-2xl px-4">
                {MENU_LINKS.map((link) => (
                  <Link key={link.link} to={link.link} className="text-center">
                    {link.text}
                  </Link>
                ))}
              </div>

              <OptionsDialog />

              <button disabled className="text-xs w-full">
                Déconnexion
              </button>
            </>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

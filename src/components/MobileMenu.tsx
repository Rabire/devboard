import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import BurgerIcon from "./Svg/BurgerIcon";
import MenuModal from "./MenuModal";
import { useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  useEffect(() => setShowModal(false), [location]);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={cn(
          "fixed right-[10px] top-[10px]",
          "bg-black rounded-full w-14 aspect-square",
          "dark:bg-white md:hidden",
          "flex items-center justify-center"
        )}
      >
        <BurgerIcon />
      </button>

      {showModal &&
        createPortal(
          <MenuModal closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default MobileMenu;

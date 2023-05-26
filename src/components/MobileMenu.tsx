import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import cn from "classnames";

import BurgerIcon from "./svg/BurgerIcon";
import MenuModal from "./MenuModal";

const MobileMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const location = useLocation();

  useEffect(() => setShowModal(false), [location]);

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (Math.abs(prevScrollPos - currentScrollPos) > 100) {
      setIsVisible(prevScrollPos > currentScrollPos);
      setShowModal(false);
      prevScrollPos = currentScrollPos;
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={cn(
          "border-2 border-light-secondary dark:border-dark-secondary",
          "fixed right-1/2 translate-x-1/2 top-[15px] z-40",
          "bg-black rounded-full w-14 aspect-square",
          "dark:bg-white tablet:hidden",
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

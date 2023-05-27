import { useState } from "react";

const useMenuVisibility = (closeMenu: () => void) => {
  const [isVisible, setIsVisible] = useState(true);

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (Math.abs(prevScrollPos - currentScrollPos) > 100) {
      setIsVisible(prevScrollPos > currentScrollPos);
      closeMenu();
      prevScrollPos = currentScrollPos;
    }
  };

  return isVisible;
};

export default useMenuVisibility;

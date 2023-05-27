import { useState } from "react";

const useMenuVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (Math.abs(prevScrollPos - currentScrollPos) > 100) {
      setIsVisible(prevScrollPos > currentScrollPos);
      //   setShowModal(false);
      prevScrollPos = currentScrollPos;
    }
  };

  return isVisible;
};

export default useMenuVisibility;

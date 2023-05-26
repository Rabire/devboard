import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import MENU_LINKS from "../static/menu-links";
import DevBoardLogo from "./svg/DevBoardLogo";
import OptionsIcon from "./svg/OptionsIcon";
import OptionsDialog from "./OptionsDialog";

const NavBar = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <aside className="h-full z-40">
      <nav
        className={cn(
          "hidden tablet:flex sticky top-5 max-h-content",
          "bg-light-secondary dark:bg-dark-secondary rounded-2xl",
          "flex-col justify-between items-center py-12 px-5"
        )}
      >
        <DevBoardLogo />

        <div className="flex flex-col gap-5 items-center">
          {MENU_LINKS.map((link) => (
            <Link key={link.link} to={link.link} className="text-center">
              {link.icon}
            </Link>
          ))}

          <div className="relative">
            <button onClick={() => setShowOptions(true)}>
              <OptionsIcon />
            </button>
            {showOptions && (
              <OptionsDialog
                isDialog
                close={() => setShowOptions(false)}
                isOpen={showOptions}
              />
            )}
          </div>
        </div>

        <button className="text-xs w-full">Disconnect</button>
      </nav>
    </aside>
  );
};

export default NavBar;

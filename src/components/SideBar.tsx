import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import MENU_LINKS from "../static/menu-links";
import DevBoardLogo from "./DevBoardLogo";
import OptionsIcon from "./svg/OptionsIcon";
import OptionsDialog from "./OptionsDialog";

const SideBar = () => {
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
        <DevBoardLogo size="sm" pathColor="secondary" />

        <div className="flex flex-col gap-5 items-center">
          {MENU_LINKS.map((link) => (
            <Link
              key={link.link}
              to={link.link}
              className="text-center"
              aria-label={`${link.text} page`}
            >
              {link.icon}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setShowOptions(true)}
              aria-label="open theme options"
            >
              <OptionsIcon />
            </button>

            <OptionsDialog
              isDialog
              close={() => setShowOptions(false)}
              isOpen={showOptions}
            />
          </div>
        </div>

        <button disabled className="text-xs w-full">
          Déconnexion
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;

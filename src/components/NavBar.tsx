import { Link } from "react-router-dom";
import MENU_LINKS from "../static/menu-links";
import DevDashLogo from "./Svg/DevDashLogo";
import OptionsIcon from "./Svg/OptionsIcon";

const NavBar = () => (
  <nav className="hidden md:flex bg-light-secondary dark:bg-dark-secondary rounded-2xl flex-col justify-between items-center py-12 px-5">
    <DevDashLogo />

    <div className="flex flex-col gap-5 items-center">
      {MENU_LINKS.map((link) => (
        <Link key={link.link} to={link.link} className="text-center">
          {link.icon}
        </Link>
      ))}
      <button>
        <OptionsIcon />
      </button>
    </div>

    <button className="text-xs w-full">Disconnect</button>
  </nav>
);

export default NavBar;

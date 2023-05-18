import { Link } from "react-router-dom";
import MENU_LINKS from "../static/menu-links";
import DevDashLogo from "./Svg/DevDashLogo";
import ExitCrossIcon from "./Svg/ExitCrossIcon";

type Props = { closeModal: () => void };

const MenuModal = ({ closeModal }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="h-screen absolute inset-0 bg-black/70"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="bg-secondary p-8 dark:text-white drop-shadow-xl absolute inset-0 left-auto">
        <div className="flex flex-col gap-3 text-2xl h-full">
          <button className="mb-16 flex justify-end" onClick={closeModal}>
            <ExitCrossIcon />
          </button>
          <div className="flex justify-center mb-7">
            <DevDashLogo />
          </div>
          {MENU_LINKS.map((link) => (
            <Link key={link.link} to={link.link} className="text-center">
              {link.text}
            </Link>
          ))}
          <button>Options</button>
        </div>
        <button className="text-xs w-full">Disconnect</button>
      </div>
    </>
  );
};

export default MenuModal;

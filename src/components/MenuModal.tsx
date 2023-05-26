import { Link } from "react-router-dom";
import MENU_LINKS from "../static/menu-links";
import DevBoardLogo from "./svg/DevBoardLogo";
import ExitCrossIcon from "./svg/ExitCrossIcon";

type Props = { closeModal: () => void };

const MenuModal = ({ closeModal }: Props) => (
  <>
    {/* Overlay */}
    <div
      className="h-screen sticky inset-0 bg-black/70 z-50"
      onClick={closeModal}
    />

    {/* Modal */}
    <div className="bg-secondary fixed p-8 dark:text-white drop-shadow-xl inset-0 left-auto z-50">
      <div className="flex flex-col gap-3 text-2xl h-full">
        <button className="mb-16 flex justify-end" onClick={closeModal}>
          <ExitCrossIcon />
        </button>
        <div className="flex justify-center mb-7">
          <DevBoardLogo />
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

export default MenuModal;

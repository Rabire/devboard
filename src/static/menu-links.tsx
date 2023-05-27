import ProductivityIcon from "../components/svg/ProductivityIcon";
import TechnicalIcon from "../components/svg/TechnicalIcon";
import AdministrativeIcon from "../components/svg/AdministrativeIcon";

const MENU_LINKS = [
  {
    link: "/",
    text: "Productivitée",
    icon: <ProductivityIcon />,
  },
  {
    link: "/technical",
    text: "Technique",
    icon: <TechnicalIcon />,
  },
  {
    link: "/administrative",
    text: "Administration",
    icon: <AdministrativeIcon />,
  },
];

export default MENU_LINKS;

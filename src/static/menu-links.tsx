import ProductivityIcon from "../components/svg/ProductivityIcon";
import TechnicalIcon from "../components/svg/TechnicalIcon";
import AdministrativeIcon from "../components/svg/AdministrativeIcon";

const MENU_LINKS = [
  {
    link: "/",
    text: "Productivity",
    icon: <ProductivityIcon />,
  },
  {
    link: "/technical",
    text: "Technical",
    icon: <TechnicalIcon />,
  },
  {
    link: "/administrative",
    text: "Administrative",
    icon: <AdministrativeIcon />,
  },
];

export default MENU_LINKS;

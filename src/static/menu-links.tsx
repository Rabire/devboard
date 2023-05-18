import ProductivityIcon from "../components/Svg/ProductivityIcon";
import TechnicalIcon from "../components/Svg/TechnicalIcon";
import AdministrativeIcon from "../components/Svg/AdministrativeIcon";

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

import "./style.css";

import Menu from "../../images/menu-top-xs.png";
import Logo from "../../images/ironhack-logo-xs.png";

function Header() {
  return (
    <div id="header">
      <img id="logo" src={Logo} alt="logo iron" />
      <img id="menu" src={Menu} alt="menu top" />
    </div>
  );
}

export default Header;

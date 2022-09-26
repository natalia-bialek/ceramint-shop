import * as React from "react";
import "./NavigationBar.css";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import logo from "../../images/logo.png";
import { TbShoppingCart } from "react-icons/tb";

export default function NavigationBar(props) {
  return (
    <nav className="nav">
      <a className="nav__logo" href="/" title="Ceramint Shop">
        <img src={logo} alt="Ceramint Shop Logo" />
      </a>

      <ul className="nav__links">
        <li className="nav__link">
          <a href="/" title="Zobacz nasze produkty">
            Produkty
          </a>
        </li>
        <li className="nav__link">
          <a href="" title="Informacje o naszej pracowni">
            Nasza pracownia
          </a>
        </li>
        <li className="nav__link icon">
          <SecondaryButton>
            <TbShoppingCart />
          </SecondaryButton>
        </li>
        <li className="nav__link"></li>
      </ul>
    </nav>
  );
}

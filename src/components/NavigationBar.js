import * as React from "react";
import "../styles/components/NavigationBar.css";

const MENU_DATA = [
  { name: "Kubki", path: "/produkty/kubki" },
  { name: "Miski", path: "/produkty/miski" },
  { name: "Talerze", path: "/produkty/talerze" },
];

export default function NavigationBar() {
  return (
    <nav className="nav">
      <div className="nav__logo">LOGO</div>
      <ul className="nav__links">
        {MENU_DATA.map((item, index) => {
          return (
            <li key={item.name + index} className="nav__link">
              <a href={item.path}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

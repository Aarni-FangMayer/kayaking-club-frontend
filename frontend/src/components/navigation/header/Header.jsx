import React from "react";
import './header.css'

const Header = ( {setMenuOpen, menuOpen })  => {

  return (
    <div className="layout__header">
      <div className="header__logo">
        <a href="/">River pulse</a>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/tours">routes & prices</a>
          </li>
          <li>
            <a href="/blogs">our blog</a>
          </li>
        </ul>
      </nav>
              <div
          className="header__burgermenu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/hamburger_menu.png" alt="Menu" />
        </div>
    </div>
  );
};

export default Header;

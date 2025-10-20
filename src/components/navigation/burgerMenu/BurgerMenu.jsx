import React, { useState } from "react";
import './burgerMenu.css'

const BurgerMenu = ({ menuOpen, setMenuOpen, language, setLanguage }) => {
  const [logined, setLogined] = useState(false);
  return (
    <div className={`burgerMenu ${menuOpen ? "burgerMenu--open" : ""}`}>
      <button className="burgerMenu__close" onClick={() => setMenuOpen(false)}>
        ✕
      </button>
      <ul className="burgerMenu__list">
        <li>
          <a href="/account">Account</a>
        </li>
        <li>
          <a href="/tours">Routes & Prices</a>
        </li>
        <li>
          <a href="/blogs">Our Blog</a>
        </li>
        <li>
          <select
            id="language"
            className="burgerMenu__lang-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </li>
        <li>
          {logined ? <button onClick={()=> {setLogined(!logined)}} className="loginBtn">Logout</button> : <button onClick={()=> {setLogined(!logined)}} className="loginBtn">Login or register</button> }
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;

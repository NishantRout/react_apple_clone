import { Apple, LocalMall, Search, Menu } from "@material-ui/icons";
import React from "react";
import "./css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__desktop">
        <div className="navbar__logo">
          <Apple style={{ fontSize: 22 }} />
        </div>
        <div className="navbar__menu">
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Watch</p>
          <p>TV</p>
          <p>Music</p>
          <p>Support</p>
        </div>
        <div className="navbar__icons">
          <Search style={{ fontSize: 22 }} className="navbarIcons__search" />
          <LocalMall style={{ fontSize: 22 }} className="navbarIcons__cart" />
        </div>
      </div>

      <div className="navbar__mob">
        <div className="navbarMob__logo">
          <Menu style={{ fontSize: 22 }} />
          <Apple style={{ fontSize: 22 }} />
          <LocalMall style={{ fontSize: 22 }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./styles.scss";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <React.Fragment>
      <header className="navbar">
        <div className="brand">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
          </ul>
        </nav>
        <div
          className={`hamburger-icon ${navbarCollapsed ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <ul class="mobile-menu">
            <li>
              <a href="/home">Home</a>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;

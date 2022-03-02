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
            <img src={logo} alt="ikesoft" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Planes</a>
              <a href="#">Clientes</a>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
        <div
          className={`hamburger-icon ${navbarCollapsed ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <ul className="mobile-menu">
            <li>
              <a href="#">Home</a>
              <a href="#">Planes</a>
              <a href="#">Clientes</a>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;

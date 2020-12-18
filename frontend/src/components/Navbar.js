import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <Link to="/" className="left__items navbar__logo">
            {" "}
            Lugares Locales
          </Link>

          <ul className="center__items navbar-nav">
            <Link to="/" className="center__menu__item">
              Home
            </Link>

            <Link to="/places" className="center__menu__item ">
              Destinos<i className="fas fa-caret-down ml-1"></i>
            </Link>

            <Link to="/about-us" className="center__menu__item">
              Nosotros
            </Link>

            <Link to="/experiences" className="center__menu__item">
              Experiencias
            </Link>

            <Link to="/tendencies" className="center__menu__item">
              Tendencias
            </Link>

            <Link to="/contact-area" className="center__menu__item">
              Contacto
            </Link>
          </ul>

          <ul className="right__items navbar-nav">{props.children}</ul>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

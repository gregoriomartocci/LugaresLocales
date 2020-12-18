import React from "react";
import "./Navbar.css";
import ExploreIcon from "@material-ui/icons/Explore";
import PlaceIcon from "@material-ui/icons/Place";

function DropdownMenu(props) {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<ExploreIcon />}>Perfil</DropdownItem>
      <DropdownItem leftIcon={<PlaceIcon />}>Configuracion</DropdownItem>
      <DropdownItem leftIcon={<PlaceIcon />}>Cerrar Sesión</DropdownItem>
    </div>
  );
}

export default DropdownMenu;

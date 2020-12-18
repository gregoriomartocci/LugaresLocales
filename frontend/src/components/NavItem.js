/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import "./Navbar.css"

import React, { useState } from "react";


function NavItem(props) {
    
    // el primero es el estado (abierto) el segundo es la funcion que lo cambia
    // si quiero lo puedo arrancar en el estado qeu yo quiera (falso)

    const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
        {/* On Click (!click) niego y cambio el estado onClicke es el evento y SetOpen el Handler */}
      <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>   
          {props.icon}
      </a>

        {/* SI OPEN ES TRUE, MUESTRO LOS CHILDS */}
      {open && props.children}

    </li>
  );
}

export default NavItem;

import React from "react";
import "./Navbar.css";
import ExploreIcon from "@material-ui/icons/Explore";
import PlaceIcon from '@material-ui/icons/Place';

function DropdownSearch(props) {
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
    <div className="search__dropdown">
      
      <input className="search__dropdown__input" placeholder="Buscar"></input>

      <button className="search_dropdown__button">Buscar</button>
      
    </div>
  );
}

export default DropdownSearch;


import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check Out these EPIC Destinations!</h1>
      <div className="cards__wrapper">
        <ul className="card__items">
          <CardItem
            src="images/img"
            text="Descubri tal cosa"
            label="Categoria"
            path="/services"
          />
        </ul>
      </div>
    </div>
  );
}

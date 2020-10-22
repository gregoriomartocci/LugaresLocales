import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./LandingSection.css";

export default function LandingSection() {
  return (
    <div className="landing-container">
      <h1>Las mejores guias de Viaje!</h1>
      <p>están en Lugares Locales!</p>
      <div className="landing-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonStyle="btn--large"
        >
          Empecemos!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonStyle="btn--large"
        >
          Otro item
        </Button>
      </div>
    </div>
  );
}

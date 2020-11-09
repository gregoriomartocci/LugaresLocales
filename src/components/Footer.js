import React from "react";
import './Footer.css';
import {Button} from "./Button"

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-container">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vaction deals
        </p>

        <p className="footer-suscription-text">
            You can unsuscribe anytime
        </p>

        <div className="input-areas">

            <form>
                <input type="email" name="email" placeholder="your email" className="footer-input"/>

                    <Button buttonStyle="btn--outline">Suscribe</Button>

        
            </form>

        </div>

      </section>
    </div>
  );
}

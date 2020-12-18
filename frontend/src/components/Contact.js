import React from "react";
import "./Contact.css";
import Footer from "./Footer";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ExploreIcon from "@material-ui/icons/Explore";

function Contact() {
  return (
    <>
      <body>
        <div className="container row center-xs">
          <div className="box_1">
            <h1 className="main__title">Contacto</h1>
            <p className="main__subtitle">te responderemos a la brevedad</p>
          </div>

          <div className="contact__cards">
            <div className="contact__card">
              <ul>
                <li>
                  <PhoneIcon></PhoneIcon>
                </li>
                <li>
                  <h3>Telefono</h3>
                </li>
                <li>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </li>
                <li>+1-2345-2345</li>
              </ul>
            </div>
            <div className="contact__card">
              <ul>
                <li>
                  <EmailIcon></EmailIcon>
                </li>
                <li>
                  <h3>Email</h3>
                </li>
                <li>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </li>
                <li>lugareslugares@contacto.com.ar</li>
              </ul>
            </div>
            <div className="contact__card">
              <ul>
                <li>
                  <ExploreIcon></ExploreIcon>
                </li>
                <li>
                  <h3>Contacto</h3>
                </li>
                <li>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </li>
                <li>Ver en Google</li>
              </ul>
            </div>
          </div>

          <div className="box_2">
            <h1 className="main__title">Dejanos tu informacion</h1>
          </div>

          <div class="post__comment__box">
            <div class="input__group row reverse">
              <input className="comment__input" placeholder="Nombre*" />
              <input className="comment__input" placeholder="Apellido*" />
              <input className="comment__input" placeholder="Concepto**" />
            </div>

            <textarea
              className="comment__text__area"
              placeholder="Mensaje*"
            ></textarea>

            <div class="comment__button">
              <button type="button submit">Enviar</button>
            </div>
          </div>
        </div>
      </body>

      <Footer></Footer>
    </>
  );
}

export default Contact;

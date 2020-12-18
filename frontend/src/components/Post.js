import React from "react";
import "./Post.css";
import Footer from "./Footer";
import Cards from "./Cards";

function Test() {
  return (
    <>
      <div className="container row center-xs">
        
        <div className="Post">
          <div className="box_1">
            <h1>Check Out The Most Awesome VR Headset in 2020</h1>
          </div>
          <div className="box_2">
            <img src="/images/PATAGONIA 202.jpg" alt="img" />
          </div>
          <div className="post__container">
            <div className="breadcrumb">start</div>
            <h1>I neglect my talents</h1>
            <p className="text__block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className="post__gallery">
              {/* Gallery Row*/}
              <div class="post__gallery__row row">
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              {/* Gallery Row*/}
              <div class="post__gallery__row row">
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src="/images/PATAGONIA 202.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="box_5">
              <p className="text__block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className="box_6">
              <img src="/images/PATAGONIA 202.jpg" alt="img" />
            </div>

            <div className="box_7">
              <p className="text__block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        {/*Comment Section*/}

        <div class="post__comment__box">
          <h1> Leave a Reply </h1>

          <textarea
            className="comment__text__area"
            placeholder="comment*"
          ></textarea>

          <div class="input__group row reverse">
            <input className="comment__input" placeholder="Name*" />
            <input className="comment__input" placeholder="Lastname*" />
          </div>

          <div class="comment__button">
            <button type="button submit">
              Enviar
            </button>
          </div>

        </div>

        <Cards></Cards>

        {/*End of Container*/}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Test;

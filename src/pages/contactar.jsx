import React from "react";
import linFoto from "../img/reds/linkfoto 1.jpg";
import logo from "../img/reds/logo-josrey-original 1.png";
import like from "../img/bxs-heart.svg";
import comen from "../img/bxs-message-rounded-dots.svg";
import guard from "../img/bx-bookmark.svg";


const contact = () => {
  return (
    <div className="contact">

      <div className="contactcard">
        <div className="contactimg">
          <img src={linFoto} alt="" />
        </div>
        <div className="contactinfo">
          <h3>LinkedIn</h3>
          <div className="contacClip">
            <a href="https://www.linkedin.com/in/rafael-rojaspe/" target="_blank" rel="noreferrer">
            <span><img src={like} alt="" /></span>
            <span><img src={comen} alt="" /></span>
            <span><img src={guard} alt="" /></span>
            </a>
          </div>
          </div>
      </div>

      <div className="contactcard">
        <div className="contactimg">
          <img src={logo} alt="" />
        </div>
        <div className="contactinfo">
          <h3>Codepen</h3>
          <div className="contacClip">
            <a href="https://codepen.io/rafaelrr1" target="_blank"rel="noreferrer">
            <span><img src={like} alt="" /></span>
            <span><img src={comen} alt="" /></span>
            <span><img src={guard} alt="" /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="contactcard">
        <div className="contactimg">
          <img src={logo} alt="" />
        </div>
        <div className="contactinfo">
          <h3>Facebook</h3>
          <div className="contacClip">
            <a href="https://www.facebook.com/josreyoficial" target="_blank"rel="noreferrer">
            <span><img src={like} alt="" /></span>
            <span><img src={comen} alt="" /></span>
            <span><img src={guard} alt="" /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="contactcard">
        <div className="contactimg">
          <img src={logo} alt="" />
        </div>
        <div className="contactinfo">
          <h3>Github</h3>
          <div className="contacClip">
            <a href="https://github.com/rafaelrr1" target="_blank"rel="noreferrer">
            <span><img src={like} alt="" /></span>
            <span><img src={comen} alt="" /></span>
            <span><img src={guard} alt="" /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="contactcard">
        <div className="contactimg">
          <img src={logo} alt="" />
        </div>
        <div className="contactinfo">
          <h3>Tik tok</h3>
          <div className="contacClip">
            <a href="https://www.tiktok.com/@josrey_cod" target="_blank"rel="noreferrer">
            <span><img src={like} alt="" /></span>
            <span><img src={comen} alt="" /></span>
            <span><img src={guard} alt="" /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="contactcard">
        <div className="contactimg">
          <img src={linFoto} alt="" />
        </div>
        <div className="contactinfo">
          <h3>whatsapp</h3>
          <div className="contacClip">
            <a href="https://wa.link/wznm0k" target="_blank"rel="noreferrer">
            <span><img src={like} alt="" /></span>
            <span><img src={comen} alt="" /></span>
            <span><img src={guard} alt="" /></span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default contact;

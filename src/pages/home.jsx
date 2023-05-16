import React, { useState } from 'react';
import inc from "../img/bx-home-alt-2.svg"
import use from "../img/bxs-user.svg"
import pro from "../img/bxs-spreadsheet.svg"
import fo from "../img/bxs-flag-checkered.svg"
import con from "../img/bxs-contact.svg"
import lin from "../img/bxl-linkedin-square.svg";
import cod from "../img/bxl-codepen.svg";
import git from "../img/bxl-github.svg";
import facc from "../img/bxl-facebook.svg";
import tik from "../img/bxl-tiktok.svg";
import wha from "../img/bxl-whatsapp.svg";
import Ch from "../img/bxs-user-check.svg";
import Inicio from "./inicio"
import Perfil from './perfil';
import Proyect from './proyecto';
import Formation from './fromation';
import Contact from './contactar';
import Skills from './skills';


const Home = ()=>{

    const [opcionSeleccionada, setOpcionSeleccionada] = useState('inicio');

  const mostrarContenido = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

    return (
      <div className="home">
        <div className="homeconte">
          <div className="homesibar">
            <div className="homemenu">
              <div className="homeclip">
                <button onClick={() => mostrarContenido("inicio")}>
                  {" "}
                  <img src={inc} alt="" />
                  <span>Inicio</span>{" "}
                </button>
                <button onClick={() => mostrarContenido("perfil")}>
                  {" "}
                  <img src={use} alt="" />
                  <span>Perfil</span>{" "}
                </button>
                <button onClick={() => mostrarContenido("skills")}>
                  {" "}
                  <img src={Ch} alt="" />
                  <span>Skills</span>{" "}
                </button>
                <button onClick={() => mostrarContenido("proyecto")}>
                  {" "}
                  <img src={pro} alt="" />
                  <span>Proyecto</span>{" "}
                </button>
                <button onClick={() => mostrarContenido("formacion")}>
                  {" "}
                  <img src={fo} alt="" />
                  <span>Formación</span>{" "}
                </button>
                <button onClick={() => mostrarContenido("contacto")}>
                  {" "}
                  <img src={con} alt="" />
                  <span>Contactar</span>{" "}
                </button>
              </div>

              <div className="homeredes">
                <div className="homeredeCont">
                  <div className="homenavrede">
                    <a
                      href="https://www.linkedin.com/in/rafael-rojaspe/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={lin} alt="" />
                    </a>
                  </div>

                  <div className="homenavrede">
                    <a
                      href="https://codepen.io/rafaelrr1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={cod} alt="" />
                    </a>
                  </div>

                  <div className="homenavrede">
                    <a
                      href="https://www.facebook.com/josreyoficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={facc} alt="" />
                    </a>
                  </div>
                  <div className="homenavrede">
                    <a
                      href="https://github.com/rafaelrr1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={git} alt="" />
                    </a>
                  </div>
                  <div className="homenavrede">
                    <a
                      href="https://www.tiktok.com/@josrey_cod"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={tik} alt="" />
                    </a>
                  </div>

                  <div className="homenavrede">
                    <a
                      href="https://wa.link/wznm0k"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={wha} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="homeconatiner">
            <div className="homepages">

           
            {opcionSeleccionada === "inicio" && (
              <div className="inicontainer">
                <h3>Inicio</h3>
                <Inicio/>
              </div>
            )}

            {opcionSeleccionada === "perfil" && (
              <div className="inicontainer">
                <h3>Perfil</h3>
                <Perfil/>
              </div>
            )}
             {opcionSeleccionada === "skills" && (
              <div className="inicontainer">
                <h3>Skills</h3>
                <Skills/>
              </div>
            )}

            {opcionSeleccionada === "proyecto" && (
              <div className="inicontainer">
                <h3>Proyecto</h3>
                <Proyect/>
              </div>
            )}

            {opcionSeleccionada === "formacion" && (
              <div className="inicontainer">
                <h3>Formación</h3>
                <Formation/>
              </div>
            )}

            {opcionSeleccionada === "contacto" && (
              <div className="inicontainer">
                <h3>Contactar</h3>
                <Contact/>
              </div>
            )}
             </div>
          </div>
        </div>
      </div>
    );

}
export default Home;
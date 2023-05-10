import React, { useState } from 'react';
import inc from "../img/bx-home-alt-2.svg"
import use from "../img/bxs-user.svg"
import pro from "../img/bxs-spreadsheet.svg"
import fo from "../img/bxs-flag-checkered.svg"
import con from "../img/bxs-user.svg"


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
              
            </div>
          </div>

          <div className="homeconatiner">
            {opcionSeleccionada === "inicio" && (
              <div className="inicontainer">
                <h3>Inicio</h3>
                <h3>Detalles</h3>
              </div>
            )}

            {opcionSeleccionada === "perfil" && (
              <div className="inicontainer">                
                <h3>Perfil</h3>
              </div>
            )}

            {opcionSeleccionada === "proyecto" && (
              <div className="inicontainer">
                <h3>Proyecto</h3>
                <h3>Detalles</h3>
              </div>
            )}

            {opcionSeleccionada === "formacion" && (
              <div className="inicontainer">
                <h3>Formación</h3>
                <h3>Detalles</h3>
              </div>
            )}

            {opcionSeleccionada === "contacto" && (
              <div className="inicontainer">
                <h3>Contactar</h3>
                <h3>Detalles</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );

}
export default Home;
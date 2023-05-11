import React, { useState } from 'react';
import alu from "../img/formtion/alura.png"
import cib from "../img/formtion/Cibertec.png"
import nex from "../img/formtion/Next-u.png"
import Aluara from "../componets/alura";
import Cibertec from "../componets/cibertec";
import Next from "../componets/next-u"


const Formation = ()=>{

    const [opcionSeleccionada, setOpcionSeleccionada] = useState('alura');

    const mostrarContenido = (opcion) => {
      setOpcionSeleccionada(opcion);
    };
  

    return (
      <div className="formation">
        <div className="formainst">
          <div className="forminscard">
            <div className="formacarimg">
              <img src={alu} alt="" />
              <div className="formaporce">
                <div className="formaporcenter">
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="formacarname">
              <h4>Oracle Next Education </h4>
              <h5>Desarrollador Full Stack </h5>
              <button onClick={() => mostrarContenido("alura")}>Ver</button>
            </div>
          </div>

          <div className="forminscard">
            <div className="formacarimg">
              <img src={cib} alt="" />
              <div className="formaporce">
                <div className="formaporcenter">
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="formacarname">
              <h4>Cibertec </h4>
              <h5>Computación e Informática</h5>
              <button onClick={() => mostrarContenido("Cibertec")}>Ver</button>
            </div>
          </div>

          <div className="forminscard">
            <div className="formacarimg">
              <img src={nex} alt="" />
              <div className="formaporce">
                <div className="formaporcenter">
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="formacarname">
              <h4>Next-U </h4>
              <h5>Desarrollador web </h5>
              <button onClick={() => mostrarContenido("next-u")}>Ver</button>
            </div>
          </div>
        </div>
        <div className="formacerti">
          {opcionSeleccionada === "alura" && (
            <div>
              <h3>Alura</h3>
              <Aluara />
            </div>
          )}

          {opcionSeleccionada === "Cibertec" && (
            <div>
              <h3>Cibertec</h3>
              <Cibertec />
            </div>
          )}

          {opcionSeleccionada === "next-u" && (
            <div>
              <h3>Next-U</h3>
              <Next />
            </div>
          )}
        </div>
      </div>
    );
}
export default Formation;
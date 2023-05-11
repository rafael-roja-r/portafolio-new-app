import React from "react";
import fondo from "../img/fondo.webp"


const Inicio = ()=>{

    return(
        <div className="inico">
            <h1>Rafael Rojas</h1>
            <h3>Desarrollador web</h3>
            <p>¡Bienvenidos al lugar donde tus ideas cobran vida!</p>

            <img src={fondo} alt="" />
        </div>
    );

}

export default Inicio;
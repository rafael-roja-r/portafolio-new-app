import React from "react";
import c1 from "../img/certifi/c1.png";
import c2 from "../img/certifi/c2.png";
import c3 from "../img/certifi/c3.png";
import c4 from "../img/certifi/c4.png";
import c5 from "../img/certifi/c5.png";
import c11 from "../img/certifi/alura.jpg";


const alura = ()=>{
    return(
        <div className="aluraCon">
            <div className="aluraCocard">
                <img src={c1} alt="" />
            </div>

            <div className="aluraCocard">
                <img src={c2} alt="" />
            </div>

            <div className="aluraCocard">
                <img src={c3} alt="" />
            </div>

            <div className="aluraCocard">
                <img src={c4} alt="" />
            </div>
            <div className="aluraCocard">
                <img src={c5} alt="" />
            </div>
            <div className="aluraCocard">
                <img src={c11} alt="" />
            </div>
            

            
        </div>
    )
}

export default alura;
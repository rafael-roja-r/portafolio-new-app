import React from "react";
import c13 from "../img/certifi/c13.png";
import c14 from "../img/certifi/c14.png";

const next = ()=>{
    return(
        <div className="nextCon">
            <div className="nextCocard">
                <img src={c13} alt="" />
            </div>
            <div className="nextCocard">
                <img src={c14} alt="" />
            </div>
           
        </div>
    )

}

export default next;
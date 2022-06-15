import React from "react";

import "./Loading.css"
import imgLoader from "../../img/loader.svg"

export default function loader() {

    return(
        <div className="container">
            <img className="imgLoad" src={imgLoader} alt="loading" />
        </div>
    )
}
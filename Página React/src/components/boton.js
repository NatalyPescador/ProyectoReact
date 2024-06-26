import React from "react";
import B from './image/boton.png'
import './style/Boton.css'
import { Link } from "react-router-dom";

export default function Addb(props){
    return(
        <div className="container">
            <Link to="/formulario">
                <img src={B} className="boton" alt=""/>
            </Link>
        </div>
    )
}

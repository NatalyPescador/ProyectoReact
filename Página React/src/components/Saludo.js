import React from "react";
import './style/Saludo.css'

function Hola(props){
return(
    <div className="contenedor">
        <h1 className="saludo">Hola {props.username}</h1>
    </div>
)
}
export default Hola
import React from "react";
import "./style/Card.css"

class Card extends React.Component{
render(){
const {nombre,descripcion,img,color}=this.props
    return (
        <div className="tarjeta">
            <div className="card" style={{background:`${color}`}}>
            <img src={img} className="porta" alt=""/>
                <div className="info">
                    <h1 >{nombre}</h1>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    
    )
}
}

export default Card
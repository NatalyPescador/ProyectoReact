import React from "react";
import topper from "./image/topper.png";

export default class Formu extends React.Component { 
    render() {
        const {onChange, form, onSubmit}=this.props
        return(
            <div className="main_container">
                <img src={topper} alt="Titulo" className="topper" />
                <form 
                    className="formu" 
                    action="" 
                    method="post"
                    onSubmit={onSubmit}
                >
                    <label for="nombre">Escribe el nombre:</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        onChange={onChange}
                        value={form.nombre}
                    />

                    <label for="descripcion">Escribe la descripción:</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        onChange={onChange}
                        value={form.descripcion}
                    />

                    <label for="color">Selecciona el color:</label>
                    <input
                        type="text"
                        name="color"
                        id="color"
                        onChange={onChange}
                        value={form.color}
                    />
                    
                    <label for="img">Selecciona la imagen:</label>
                    <input
                        type="text"
                        name="img"
                        id="img"
                        onChange={onChange}
                        value={form.img}
                    />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
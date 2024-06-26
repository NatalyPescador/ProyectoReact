import React from "react";
// import Card from "../Card";
// import Hola from "../Saludo";
import imagenbob from "../image/Bob.png"
import imagencal from "../image/Calamardo.webp"
import Iteracion from "../Itinerante";
import Addb from "../boton";
import titulo from "../image/BobEsponja.png"
import "../style/Card.css"

export default class Maestro extends React.Component{
    state={
        data:[

        ]
    }
    async componentDidMount() {
        await this.nataly()
    }
    nataly=async()=>{
        let res = await fetch('http://localhost:8000/api/info')
        let data=await res.json()
        this.setState({
            data     
        })
        console.log(data)
    }
    render(){
        return(
        <div>
            {/* <Hola
                username="Nataly"
            /> */}
            <img src={titulo} alt="Titulo" className="bobesponja" />
            <Iteracion
                chao={this.state.data}
            />
            <Addb/>
        </div>
        )
    }
}
    // constructor(props){
    //     super(props)
    //     this.state={
    //         data:[{
    //             "id":1,
    //             "nombre":"Bob",
    //             "descripcion":" Se caracteriza por su optimismo y actitud infantil.",
    //             "img":imagenbob,
    //             "color":"#377D22"
    //         },
    //         {
    //             "id":2,
    //             "nombre":"Calamardo",
    //             "descripcion":"El personaje es retratado como de mal genio, impaciente, arrogante, atrevido, introvertido, condescendiente, amargado y misántropo, y desprecia las constantes travesuras disruptivas de sus dos vecinos.",
    //             "img":imagencal,
    //             "color":"red"
    //         }
    //     ]
    //     }

    // }
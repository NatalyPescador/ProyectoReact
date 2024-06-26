import mysql from "mysql2/promise"
import db from "../config/database.js"


export default class infoController{

    static async index(req, res){
        let conexion
        try{
            conexion = await mysql.createConnection(db)
            const [result] = await conexion.execute("SELECT * FROM informacion")
            console.log(result)
            res.json(result)
        }catch(error){
            res.status(500).json({'error':error.message})
        }
        finally{
            if(conexion){
                await conexion.end()
            }
        }
    }

    static async store(req, res){
        let conexion
        try{
            const {nombre, descripcion, img, color} = req.body
            conexion = await mysql.createConnection(db)
            const [enviar] = await conexion.execute(
                "INSERT INTO informacion (nombre, descripcion, img, color) VALUES (?,?,?,?)",
                [nombre, descripcion, img, color]
             )
            console.log(enviar)
        }catch(error){
            res.status(500).json({'error':error.message})
        }
    }

    static async detail(req, res){
        let conexion
        try{
            const {id} = req.params
            conexion = await mysql.createConnection(db)
            const [detail] = await conexion.execute("SELECT * FROM informacion WHERE id = ?", [id])
            console.log(detail)
            res.json(detail)
        }catch(error){
            res.status(500).json({'error':error.message})
        }finally{
            if(conexion){
                await conexion.end()
            }
        }
    }
}
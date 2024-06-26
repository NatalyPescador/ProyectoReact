import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import route from './config/routes.js'

const app = express()
const corsOption = {
    origin: '*'
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', cors(corsOption), route)

app.get('/',(req, res) => res.send('Estamos en el servidor de la API'))

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Esta en marcha')
})

export default app
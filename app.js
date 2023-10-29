const morgan = require('morgan'); //--> log info about method, status, time, etcGIT 
const path = require('path');

const connect = require('./connect.js');
require('dotenv').config();
const url = process.env.MONGO_URL;
const puerto = process.env.PUERTO || 3000;
// express
const express = require('express');
const app = express()
// router
const user = require('./router/usuario.js')

app.use(express.urlencoded({extended: false}))// decodificar json aplication
app.use(express.json())// ---> req.body --> si no, no se envia el body

//express settings
//app.use(morgan('dev')) // ---> log() info sobre la peticion, estado, method, etc
app.use('/', user)

app.use(express.static(path.join(__dirname, 'public')))
//carpeta public
// por que usar path.join?
// para escribir rutas en wind o linux es distinto = .folder/a != .folder\a
// cosa que al momento de desplegar en el servidor nos puede dar problemas.
// por eso aplicamos path.join que une la ruta asta el proyecto __dirname + public

const start = async () => {
  try {
    await connect(url);
    app.listen(puerto, () => {
      console.log(`Escuchando en el puerto ${puerto}`);
    })
  } catch (error) {
    console.error(error)
  }
}

start()

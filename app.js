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
app.use(morgan('dev')) // ---> log() info sobre la peticion, estado, method, etc
app.use(express.static(path.join(__dirname, 'public')))
app.use('/qwe', express.static(path.join(__dirname, 'pages', 'home')))

app.use('/', user)

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

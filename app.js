require('dotenv').config();
const connect = require('./connect.js');
const url = process.env.MONGO_URL;
const path = require('path');
const morgan = require('morgan'); //--> log info about method, status, time, etcGIT 
const puerto = process.env.PUERTO || 3000;

const user = require('./router/ruta-usuario.js')

// express
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

//express settings
app.use(express.urlencoded({extended: false}));// decodificar json aplication
app.use(express.json());// ---> req.body --> si no, no se envia el body
app.use(cookieParser());

app.use(morgan('dev')) // ---> log() info sobre la peticion, estado, method, etc

app.use('/api/v1', user) // ---> router
app.use(express.static(path.join(__dirname, 'public')));//---> url "/"
app.use('/login', express.static(path.join(__dirname, 'pages', 'login')))
app.use('/home', express.static(path.join(__dirname, 'pages', 'home')))
app.use('/registrar', express.static(path.join(__dirname, 'pages', 'registrar')))

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

start();
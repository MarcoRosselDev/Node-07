const connect = require('./connect.js');
require('dotenv').config();
const url = process.env.MONGO_URL;
const morgan = require('morgan'); //--> log info about method, status, time, etcGIT 
// express
const express = require('express');
const app = express()
const puerto = process.env.PUERTO;
// router
const user = require('./router/usuario.js')
/* 
app.use(express.urlencoded({ extended: false }));
//middleware
app.use(express.static('./public'));
app.use('/login', express.static('./paginas/login'));
app.use('/registrar', express.static('./paginas/registrar'));
app.use(express.json())
*/

app.use(express.urlencoded({extended: false}))// decodificar json aplication
app.use(express.json())// ---> req.body --> si no, no se envia el body
app.use(morgan('dev')) // ---> log() info sobre la peticion, estado, method, etc
app.use('/', user)

const start = async () =>{
  try {
    await connect(url)
    app.listen(puerto, ()=>{
      console.log(`Escuchando en el puerto ${puerto}`);
    })
  } catch (error) {
    console.error(error)
  }
}

start()
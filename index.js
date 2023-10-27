const connect = require('./connect.js')
require('dotenv').config()
const url = process.env.MONGO_URL;
// express
const express = require('express');
const app = express()
const puerto = process.env.PUERTO;

app.get('/', (req, res) => {
  res.status(200).json({msj: 'Hola mundo!'})
})


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
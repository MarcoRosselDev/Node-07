const express = require('express');
const app = express();
require('dotenv').config();
const connect = require('./connect.js');
const tareas = require('./router/tareas.js');

//express settings
app.use(express.urlencoded({extended: false}));// decodificar json aplication
app.use(express.json());// ---> req.body --> si no, no se envia el body

app.use('/api/v2', tareas);
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

const url = process.env.MONGO_URL;
const puerto = process.env.PUERTO || 3000;
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
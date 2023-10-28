const connect = require('./connect.js');
require('dotenv').config();
const express = require('express');
const app = express()
const url = process.env.MONGO_URL;
const puerto = process.env.PUERTO || 3000;

const start = async () => {
  try {
    await connect(url)
    app.listen(puerto, () => {
      console.log(`Escuchando en el puerto ${puerto}`);
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = start;
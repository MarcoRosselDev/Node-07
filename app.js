const express = require('express');
const app = express();
const tareas = require('./router/tareas.js');

//express settings
app.use(express.urlencoded({extended: false}));// decodificar json aplication
app.use(express.json());// ---> req.body --> si no, no se envia el body

app.use('/api/v2', tareas);
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.listen(3000, ()=>{
  console.log("escuchando en el puerto 3000");
})
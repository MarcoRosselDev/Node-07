const express = require('express');
const app = express();
const tareas = require('./router/tareas.js');

app.use('/api/v2', tareas);
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.listen(3000, ()=>{
  console.log("escuchando en el puerto 3000");
})
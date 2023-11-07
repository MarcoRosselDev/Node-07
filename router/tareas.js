const express = require('express');
const router = express.Router();

//middleware testing
const testMiddleware = (req, res, next) =>{
  req.nombre = 'Marco'
  console.log('Hola desde test Middleware fn');
  console.log('puede ir alguna loginca y ejecucion');
  next()
}
/* router.use(function (req, res, next) {
  console.log("Tiempo", Date.now());
  console.log('Porbando middleware en router')
  next()
}) */

const usarNombre = (req, res, next) =>{
  req.saludo = `Hola ${req.nombre}, buenos dias!`
  next()
}

router.get('/', testMiddleware, usarNombre, (req, res) =>{
  const final = `log ==> ${req.saludo}`;
  res.send(`${final}, desde '/' de router tareas`)
})

module.exports = router;
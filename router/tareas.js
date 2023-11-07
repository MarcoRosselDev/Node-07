const express = require('express');
const router = express.Router();

//middlewares
const {
  testMiddleware, 
  usarNombre} = require('../middlewares/test-middleware.js');

router.get('/', testMiddleware, usarNombre, (req, res) =>{
  const final = `log ==> ${req.saludo}`;
  res.send(`${final}, desde '/' de router tareas`)
})

module.exports = router;
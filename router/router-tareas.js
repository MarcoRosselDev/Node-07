const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const nuevoUsuario = require('../controller/registro.js');
const loginUsuario = require('../controller/login.js');

router.use(morgan('common'))
//cookie validator
const cookieParser = require('cookie-parser');
router.use(cookieParser())

//middlewares
const {
  testMiddleware, 
  usarNombre} = require('../middlewares/test-middleware.js');

router.get('/', testMiddleware, usarNombre, (req, res) =>{
  const final = `log ==> ${req.saludo}`;
  res.send(`${final}, desde '/' de router tareas`)
})
router.post('/registrar', nuevoUsuario)
router.get('/login', loginUsuario)

//error handler
router.use((err, req, res, next)=>{
  res.status(400).send(err.message)
})

module.exports = router;
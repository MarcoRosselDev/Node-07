const express = require('express');
const router = express.Router();
const {registrarUsuario, loginUsuario} = require('../controllers/usuariosfn.js')
const {nuevaTarea, getTareas} = require('../controllers/tareasfn.js')
const verifyToken = require('./validar-token.js')

//app.use('/api/v1', user)--> como referencia
router.route('/registrar').post(registrarUsuario);
router.route('/login').get(loginUsuario)
router.post('/tarea', verifyToken, nuevaTarea)
router.get('/tarea', verifyToken, getTareas)
//router.route('/login').get(getToken)

module.exports = router;
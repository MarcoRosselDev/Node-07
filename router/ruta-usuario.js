const express = require('express');
const router = express.Router();
const {registrarUsuario, loginUsuario} = require('../controllers/usuariosfn.js')

//app.use('/api/v1', user)--> como referencia
router.route('/registrar').post(registrarUsuario);
router.route('/login').get(loginUsuario)
//router.route('/login').get(getToken)

module.exports = router;
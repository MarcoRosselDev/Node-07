const express = require('express');
const router = express.Router();
const {obtenerUsuario, nuevoUsuario} = require('../controllers/usuariosfn.js')
const {getToken} = require('../controllers/login.js')

router.route('/registrar').get(obtenerUsuario).post(nuevoUsuario);
//router.route('/login').get(getToken)

module.exports = router;
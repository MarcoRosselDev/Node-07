const express = require('express');
const router = express.Router();
const {obtenerUsuario, nuevoUsuario} = require('../controllers/usuariosfn.js')

//app.use('/api/v1', user)--> como referencia
router.route('/registrar').post(nuevoUsuario);
router.route('/login').get(obtenerUsuario)
//router.route('/login').get(getToken)

module.exports = router;
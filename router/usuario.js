const express = require('express');
const router = express.Router();
const nuevoUsuario = require('../controllers/crearUsuario.js')

router.route('/').post(nuevoUsuario);

module.exports = router;
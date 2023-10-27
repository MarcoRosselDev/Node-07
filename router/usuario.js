const express = require('express');
const router = express.Router();
const {getUser, nuevoUsuario} = require('../controllers/crearUsuario.js')

router.route('/').get(getUser).post(nuevoUsuario);

module.exports = router;
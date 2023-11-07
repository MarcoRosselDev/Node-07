const Usuario = require('../modelos/mod-usuario.js');
const bcrypt = require('bcryptjs');

const loginUsuario = async (req, res) =>{
  try {
    const {password, email} = req.body;
    const user = Usuario.find({email: email})
    const comparacion  = bcrypt.compare(password, user.password);
    if (!comparacion) return res.status(401).send('password incorrecto!')
    res.status(200).send('generar token')
  } catch (error) {
    res.status(404).send('error en el login')
  }
}

module.exports = loginUsuario;
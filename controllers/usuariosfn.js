const User = require('../models/Usuario.js');
const bcrypt = require('bcryptjs');

const nuevoUsuario = async (req, res) =>{
  try {
    console.log(req.body);
    const {nombre, password, email} = req.body
    // encryptando el password antes de guardarlo en la database
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt)

    const usuario = await new User({
      nombre: nombre,
      password: passwordHash,
      email: email
    });
    await usuario.save();
    res.status(200).json(usuario)
  } catch (error) {
    res.status(401).json({error: error})
  }
}

const obtenerUsuario = async (req, res) => {
  try {
    const user = await Usuario.find()
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({msj:'Usuario no encontrado'})
  }
}

module.exports = {
  nuevoUsuario,
  obtenerUsuario
}
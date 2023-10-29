const Usuario = require('../models/Usuario.js');

const nuevoUsuario = async (req, res) =>{
  try {
    console.log(req.body);
    const {nombre, password, email} = req.body
    const usuario = await new Usuario({
      nombre: nombre,
      password: password,
      email: email
    });

    // en alguna parte devemos llamar el methodo encryptar password
    // antes de guardarlo en mongoDB
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
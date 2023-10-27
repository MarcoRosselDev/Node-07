const Usuario = require('../schema/models.js');

const nuevoUsuario = async (req, res) =>{
  try {
    console.log(req.body);
    const {nombre, password} = req.body
    const usuario = await new Usuario({
      nombre: nombre,
      password: password
    });
    await usuario.save();
    res.status(200).json(usuario)
  } catch (error) {
    res.status(401).json({error: error})
  }
}

const getUser = async (req, res) => {
  try {
    const user = await Usuario.find()
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({msj:'Usuario no encontrado'})
  }
}

module.exports = {
  nuevoUsuario,
  getUser
}
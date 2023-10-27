const Usuario = require('../schema/models.js');

const nuevoUsuario = async (req, res) =>{
  try {
    const {nombre, password} = req.body
    const usuario = await new Usuario({
      nombre: nombre,
      password: password
    })
    usuario.save()
    res.status(200).json(usuario)
  } catch (error) {
    res.status(401).json({error: error})
  }
}

module.exports = {
  nuevoUsuario
}
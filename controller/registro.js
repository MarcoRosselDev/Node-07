const Usuario = require('../modelos/mod-usuario.js')
const bcrypt = require('bcryptjs')

const nuevoUsuario = async (req, res) => {
  try {
    const {nombre, password, email} = req.body;

    // encryptar password antes de guardar...
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await new Usuario({
      nombre,
      password: hash,
      email
    })
    await user.save()
    res.status(201).json({
      usuario: user
      // cuidado con lo que retorna...
      // podrimaos redireccionar a otra pagina
    })
  } catch (error) {
    if (error['code'] === 11000) {
      return res.status(400).json("Correo ya registrado.")
    }
    console.error(error);
    res.status(400).json(error)
  }
}

module.exports = nuevoUsuario;
const Usuario = require('../modelos/mod-usuario.js')

const nuevoUsuario = async (req, res) => {
  try {
    const {nombre, password, email} = req.body;
    const user = await new Usuario({
      nombre,
      password,
      email
    })
    await user.save()
    res.status(201).json({
      usuario: user
    }).redirect('/login')
  } catch (error) {
    console.error(error);
  }
}

module.exports = nuevoUsuario;
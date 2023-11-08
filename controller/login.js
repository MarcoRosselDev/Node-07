const Usuario = require('../modelos/mod-usuario.js');
const bcrypt = require('bcryptjs');

const loginUsuario = async (req, res) =>{
  try {
    console.log(req.body);
    const {password, email} = req.body;
    console.log(email, password);
    const  query = {"email": req.body.email}
    const user = Usuario.findOne(query)
    if (!user) return res.status(404).send('No se encontro el usuario')
    const comparacion  = bcrypt.compare(password, user.password);
    if (!comparacion) return res.status(401).send('password incorrecto!')
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({msj: `${error}`})
  }
}

module.exports = loginUsuario;
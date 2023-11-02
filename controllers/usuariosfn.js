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

  /* ejemplo de usuario ya registrado 
  {
    "nombre": "marcus3",
    "email": "qwe@gmail.com",
    "password": "qwe123"
  }
  */

  try {
    console.log(req.body);
    const buscar = {"email": req.body.email}
    const user = await User.findOne(buscar);
    const passwordDB = user.password;
    const passwordBody = req.body.password;
    // encriptar passwordDB para comparar con passwordBody
    const salt = await bcrypt.genSalt(10);
    const passwordBodyCrypt = await bcrypt.hash(passwordBody, salt);
    const comparacion = await bcrypt.compare(passwordBodyCrypt ,passwordDB)

    console.log('pass req',passwordBodyCrypt);
    console.log('pass mongodb',passwordDB);
    console.log('comparacion: ', comparacion);
    if (!comparacion) {
      return res.status(404).json({msg: 'Password incorrecto'});
    } else{
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(404).json({msj:'Usuario no encontrado'})
  }
}

module.exports = {
  nuevoUsuario,
  obtenerUsuario
}
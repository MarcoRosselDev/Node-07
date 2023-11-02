require('dotenv').config();
const User = require('../models/Usuario.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const bcryptPass = async (pass) =>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt)
}

const registrarUsuario = async (req, res) =>{
  try {
    console.log(req.body);
    const {nombre, password, email} = req.body
    // encryptando el password antes de guardarlo en la database
    const crypt = await bcryptPass(password)
    const usuario = await new User({
      nombre: nombre,
      password: crypt,
      email: email
    });
    await usuario.save();
    //deveriamos reenviarnos a login si todo sale bien?
    //res.redirect('/login')
    res.status(200).json(usuario)
  } catch (error) {
    res.status(401).json(error)
  }
}

const loginUsuario = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    const comparacion = await bcrypt.compare(req.body.password , user.password);
    if (!comparacion) return res.status(404).json({msg: 'Password incorrecto'});
    // crear token
    const token = jwt.sign({
      name: user.name,
      id: user._id
    }, process.env.TOKEN_SECRET)
    res.status(200).header('auth-token', token).json({msg: "credenciales validas", jwt: token})
  } catch (error) {
    res.status(404).json({msj:'Usuario no encontrado'})
  }
}

module.exports = {
  registrarUsuario,
  loginUsuario
}
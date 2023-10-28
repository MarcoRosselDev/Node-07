//jwt para generar un token que dure x minutos o horas
const User = require('../schema/models.js')

const getToken = async (req, res) =>{
  try {
    const {name, password} = req.body;
    const response = await User.find()
    res.status(201).json(response)
  } catch (error) {
    res.status(401).json({msj: error})
  }
}

module.exports = {
  getToken
}
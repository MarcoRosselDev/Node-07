require('dotenv').config();
const jwt = require('jsonwebtoken');

// middlewere para validar token
const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({ mensaje: "Acceso denegado!" })
  try {
    const verificado = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verificado;
    next()
  } catch (error) {
    res.status(400).json({error: 'Token no es valido'})
  }
}

module.exports = verifyToken;
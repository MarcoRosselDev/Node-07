const mongoose = require('mongoose');

const usuario = new mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Usuario', usuario);
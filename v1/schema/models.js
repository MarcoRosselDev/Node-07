const mongoose = require('mongoose')
const {Schema} = mongoose;

const usuario = new Schema({
  nombre: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  fecha: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Usuario', usuario);
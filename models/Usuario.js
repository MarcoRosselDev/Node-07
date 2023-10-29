const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const usuario = new Schema({
  nombre: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  }
},{
  timestamps: true
})

// aqui creamos una encriptacion del password antes de guardarlo en la db.
// lugeo para comparar utilizamos una encriptacion del password ingresado
// con la password encriptada almacenada en la db.
// si estas coinsiden devolvemos un booleano.

module.exports = model('Usuario', usuario);
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
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
// si estas coinsiden devolvemos un booleano.s

// paso 1. encyptar antes de guardar
userSchema.methods.encryptar = async (password) =>{
  const salt = bcrypt.getSalt(10);
  return await bcrypt.hash(password, salt);
}

// paso 2. comparar encryptados
userSchema.methods.coparar = async function (password) {
  return await bcrypt.compare(password, this.password);
}
// return boolean

module.exports = mongoose.model('User', userSchema);
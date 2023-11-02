const mongoose = require("mongoose");

const tarea = new mongoose.Schema({
  titulo: {
    type: String,
    require: true
  },
  contenido: {
    type: String,
    require: true, 
  },
  user_id: {
    type: String,
    require: true
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Tarea', tarea);
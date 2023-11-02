const mongoose = require("mongoose");

const tarea = new mongoose.Schema({
  titulo: String,
  contenido: String,
  user_id: String
},{
  timestamps: true
})

module.exports = mongoose.model('Tarea', tarea);
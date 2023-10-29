const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const tarea = new Schema({
  titulo: {
    type: String,
    require: true
  }
},{
  timestamps: true
})

module.exports = model('Tarea', tarea);
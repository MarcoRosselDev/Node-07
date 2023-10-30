const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const tarea = new Schema({
  titulo: {
    type: String,
    required: true,
    user_id: {
      type: String,
      required: true
    }
  }
},{
  timestamps: true
})

module.exports = model('Tarea', tarea);
const Tarea = require('../models/tarea.js');

const nuevaTarea = async (req, res) =>{
  console.log(req.user);
  try {
    const {titulo, contenido} = req.body
    const cuerpo = {
      "titulo": titulo,
      "contenido": contenido,
      "user_id": req.user.id
    }
    const task = await new Tarea(cuerpo);
    await task.save();
    console.log(task);
    res.status(201).json({mensaje: successfull, data: task})
  } catch (error) {
    res.status(404).json({msg:error})
  }
}

module.exports = {
  nuevaTarea
}
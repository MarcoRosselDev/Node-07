const Tarea = require('../v1/models/tarea.js');

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
    return res.status(201).json({mensaje: "successfull", data: task})
  } catch (error) {
    res.status(404).json({msg:error})
  }
}

const getTareas = async (req, res) => {
  console.log(req.user.id);
  try {
    const user_id = req.user.id;
    const tasks = await Tarea.find({user_id: user_id})
    if (!tasks) return res.status(404).json({msj: "Usuario no tiene tareas"})
    const arr = []
    tasks.forEach(datos => arr.push(datos))
    res.status(200).json(arr)
  } catch (error) {
    res.status(404).json({msj: "Error en catch", data: error})
  }
}

module.exports = {
  nuevaTarea,
  getTareas
}
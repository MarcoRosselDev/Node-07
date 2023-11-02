const Tarea = require('../models/tarea.js');

const newTask = async (req, res) => {
  try {
    console.log(req.user.id);
    console.log(req.user);
    console.log(typeof(req.user.id))
    const task = await new Tarea({
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      user_id: req.user.id
    });
    await task.save();
    res.status(200).json({
      crceated: true, 
      task: task,
      user_id: user_id
    })
  } catch (error) {
    res.status(404).json({
      mensaje: 'error en el catch',
      data: error
    })
  }
}

module.exports = newTask;
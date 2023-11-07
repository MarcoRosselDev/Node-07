//middleware testing
const testMiddleware = (req, res, next) =>{
  req.nombre = 'Marco'
  console.log('Hola desde test Middleware fn');
  console.log('puede ir alguna loginca y ejecucion');
  next()
}

const usarNombre = (req, res, next) =>{
  req.saludo = `Hola ${req.nombre}, buenos dias!`
  next()
}

module.exports = {
  testMiddleware,
  usarNombre
}
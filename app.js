const start = require('./start.js')
const morgan = require('morgan'); //--> log info about method, status, time, etcGIT 
const path = require('path');
// express
const express = require('express');
const app = express()
// router
const user = require('./router/usuario.js')

//express settings
app.use(express.urlencoded({extended: false}))// decodificar json aplication
app.use(express.json())// ---> req.body --> si no, no se envia el body
app.use(morgan('dev')) // ---> log() info sobre la peticion, estado, method, etc
app.use('/', user)

//carpeta public
app.use(express.static(path.join(__dirname, 'public')))
// por que usar path.join?
// para escribir rutas en wind o linux es distinto = .folder/a != .folder\a
// cosa que al momento de desplegar en el servidor nos puede dar problemas.
// por eso aplicamos path.join que une la ruta asta el proyecto __dirname + public

//test get
app.get('/login', (req, res) =>{
  res.render('index')
})

start()

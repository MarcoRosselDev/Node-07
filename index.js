const start = require('./start.js')
const morgan = require('morgan'); //--> log info about method, status, time, etcGIT 
const path = require('path')
// express
const express = require('express');
const app = express()
// router
const user = require('./router/usuario.js')

app.use(express.urlencoded({extended: false}))// decodificar json aplication
app.use(express.json())// ---> req.body --> si no, no se envia el body
app.use(morgan('dev')) // ---> log() info sobre la peticion, estado, method, etc
app.use('/', user)
app.get('/login', (req, res)=>{
  res.json({data: 'hola'})
})
// carpeta de archivos estaticos
//app.use(express.static(path.join(__dirname, 'public')))
// conect mondodb y app.listen
start()

/* 
app.use(express.urlencoded({ extended: false }));
//middleware
app.use(express.static('./public'));
app.use('/login', express.static('./paginas/login'));
app.use('/registrar', express.static('./paginas/registrar'));
app.use(express.json())
*/
const start = require('./start.js')
const morgan = require('morgan'); //--> log info about method, status, time, etcGIT 
const {join} = require('path')
const exphbs = require("express-handlebars");
// express
const express = require('express');
const app = express()
// router
const user = require('./router/usuario.js')

// config view engine
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//express settings
app.use(express.urlencoded({extended: false}))// decodificar json aplication
//app.use(express.json())// ---> req.body --> si no, no se envia el body
app.use(morgan('dev')) // ---> log() info sobre la peticion, estado, method, etc
//app.use('/', user)

//test get
app.get('/login', (req, res) =>{
  res.render('index')
})

start()

// Using Node.js `require()`
const mongoose = require('mongoose');

const connect = (url) =>{
  try {
    mongoose.connect(url)
    console.log("Conectado a MondoDB");
  } catch (error) {
    console.error(error);
  }
}

module.exports = connect;
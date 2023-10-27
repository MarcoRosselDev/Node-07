require('dotenv').config()
console.log(process.env.MONGO_URL) // remove this after you've confirmed it is working

const connect = require('./connect.js')

connect.then(()=> console.log('hi'));
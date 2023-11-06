const express = require('express');
const router = express.Router();
console.log(router);

//middleware testing
router.use(function (req, res, next) {
  console.log("Tiempo", Date.now());
  console.log('Porbando middleware en router')
  next()
})

router.get('/', (req, res) =>{
  res.send('ruta / desde router')
})

module.exports = router;
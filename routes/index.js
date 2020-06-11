var express = require('express');
var router = express.Router();
var Estrella = require('../model/estrella.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/alta', (req, res, next)=>{
  res.render('alta_estrella', {})
});

router.get('/lista', (req, res, next)=>{
  Estrella.find({}, (err, data)=>{
    console.log(data);
    if(err) res.send("Error: " + err);
    else res.render('catalogo', {comic:data});
  });
});

router.get('/buscar', (req, res, next)=>{
  res.render('busqueda', {})
});
module.exports = router;

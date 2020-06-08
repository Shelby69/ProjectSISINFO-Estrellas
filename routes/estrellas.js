var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Estrella= require('../model/Estrella');

router.get('/', function(req, res, next) {
  Estrella.find({},function(err,datos){
    res.json(datos);
  });

});


router.post('/', function(req, res, next) {
  console.log(req.body);
  var estrella=  Estrella({
    tipo:req.body.tipo,
    tamaño:req.body.tamaño,
    brillo:req.body.brillo,
    color:req.body.color,
    temperatura:req.body.temperatura
	nombre:req.body.nombre,
    edad:req.body.edad,
   
  });

  estrella.save(function(err,data){
    if (err) {
      res.send('error');
    }else {
      res.send(data);
    }
  });

});

module.exports = router;
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Estrella = require('../model/estrella');

router.get('/',(req, res, next)=>{
  Estrella.find( {} ,(err,datos)=>{
    if(err)res.status(400).json({mensaje:"Error en el api"});
    else res.status(200).json(datos);
  });
});

router.get('/:estrellaId', (req,res,next)=>{
  Estrella.findOne({'_id':req.params.estrellaId},(err,datos)=>{
    if(datos == null){
      res.status(404).jason({"mensaje":"No encontrado"});
    }else {
      res.status(200).json(datos);
    }
  });
});
router.get('/alta', (req, res, next)=>{
  res.render('alta_estrella', {})
});

router.post('/',(req, res, next)=>{
  var estrella=Estrella({
    tipo:req.body.tipo,
    tamaño:req.body.tamaño,
    brillo:req.body.brillo,
    color:req.body.color,
    temperatura:req.body.temperatura,
	  nombre:req.body.nombre,
    edad:req.body.edad,
    imagen:req.body.imagen
  });
  estrella.save((err,datos)=>{
    if (err) res.status(404).json({mensaje:'error'});
    else res.status(201).json(datos);
  });
});

router.post('/:estrellaId',(req,res,nest)=>{
  res.status(404).json({mensaje:"Operación no permitida"});
});

router.delete('/', (req,res,next)=>{
  res.status(405).json({mensaje:"Acción no permitida"});
});

router.delete('/:estrellaId',(req,res,next)=>{
  Estrella.findOneAndDelete({'_id':req.params.estrellaId},(err,datos)=>{
    if(err) res.status(404).json(err);
    else res.status(200).json(datos);
  });
});

module.exports = router;

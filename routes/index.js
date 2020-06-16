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

router.post('/grabar',(req, res, next)=>{
  var estrella=Estrella({
    nombre:req.body.nombre,
    tipo:req.body.tipo,
    tamaño:req.body.tamaño,
    brillo:req.body.brillo,
    color:req.body.color,
    temperatura:req.body.temperatura,
    edad:req.body.edad,
    imagen:req.body.imagen
  });
  estrella.save((err,datos)=>{
    if (err) res.status(404).json({mensaje:'error'});
    else res.render('buscaestrella',datos);
  });
});

router.post('/:estrellaId',(req,res,nest)=>{
  res.status(404).json({mensaje:"Operación no permitida"});
});

router.get('/lista', (req, res, next)=>{
  Estrella.find({}, (err, data)=>{
    console.log(data);
    if(err) res.send("Error: " + err);
    else res.render('catalogo', {estrellas:data});
  });
});

router.get('/estrellas',(req, res, next)=>{
  Estrella.find( {} ,(err,datos)=>{
    if(err)res.status(400).json({mensaje:"Error en el api"});
    else res.status(200).json(datos);
  });
});

router.get('/:estrellaId', (req, res, next)=>{
  Estrella.findOne({'_id':req.params.estrellaId}, (err, data)=>{
    if(data==null){
      res.status(404).json({"mensaje":"No existe la estrella"});
    }else{
      res.status(201).json(data);
    }
  });
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

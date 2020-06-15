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
    else res.status(201).json(datos);
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

router.get('/:estrellaId', (req, res, next)=>{
  Estrella.findOne({'_id':req.params.estrellaId}, (err, data)=>{
    if(data==null){
      res.status(404).json({"mensaje":"no encotrada estrella"});
    }else{
      res.status(201).json(data);
    }
  });
});

router.get('/buscar', (req, res, next)=>{
  res.render('busqueda', {})
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/datos', function(req, res, next){
  var datos = [

              {"Nombre": "Alexei"},
              {"Apellido": "Rodriguez"},
              {"Edad": 22},
              {"Telefono": 94833503},

  ];

  res.json(datos);
});

router.get('/mensaje', function(req, res, next){
  res.render('mensaje', {"txtMensaje":""});
});

var mensajes = [];

router.post('/mensaje',function(req,res,next){

    mensajes.push("prueba ".concat(req.body.txtMensaje));

    var msgs = mensajes;
    var rtObject = {};
    rtObject.txtMensaje = req.body.txtMensaje;
    rtObject.msg= msgs;
  res.render('mensaje', rtObject);
});

module.exports = router;

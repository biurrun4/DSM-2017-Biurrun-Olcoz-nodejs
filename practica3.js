var express = require('express');
var app = express();
var rutas = require('./routes/routes');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

app.set('view engine','jade');

app.use(express.static('public'));

app.use('/',rutas);
app.use('/about',rutas);
app.use('/contact',rutas);
app.use('/products',rutas);
app.use('/products/1',rutas);
app.use('/products/2',rutas);
app.use('/products/3',rutas);

app.post('/contact',parseUrlencoded,function(request,response){
	var nombre = request.body.nombre;
	var apellidos = request.body.apellidos;
	var asunto = request.body.asunto;
	var email = request.body.email;
	var mensaje = request.body.mensaje;
	console.log("Recibido: \n");
	console.log(nombre);
	console.log(apellidos);
	console.log(asunto);
	console.log(email);
	console.log(mensaje);
	response.render('contact',{
			display: "block",
			nombre: nombre,
			apellidos: apellidos,
			asunto: asunto,
			email: email,
			mensaje: mensaje
	})
})
app.listen(8080);
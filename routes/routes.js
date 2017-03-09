var express = require('express');
var router = express.Router();

	router.route('/')
	.get(function(request,response){
		response.render('home',
		{

		})
	})

	router.route('/about')
	.get(function(request,response){
		response.render('about',
		{

		})
	})

	router.route('/products')
	.get(function(request,response){
		response.render('products',
		{

		})
	})

	router.route('/contact')
	.get(function(request,response){
		response.render('contact',
		{
			display: "none",
			nombre: "",
			apellidos: "",
			asunto: "",
			email: "",
			mensaje: ""
		})
	})

var productos = {
'1' : {	imagen: "osasuna1.jpg",
		desc: "Camiseta 1"},
'2' : {	imagen: "paseo1.jpg",
		desc: "Camiseta 2"},
'3' : {	imagen: "osasunaverde1.jpg",
		desc: "Camiseta 3"},
}

	router.route('/products/:id')
	.get(function(request,response){
		console.log(request.params.id);
		var id = productos[request.params.id].imagen
		console.log(id)
		var desc = productos[request.params.id].desc
		console.log(desc)
		if(!desc || !id){
			response.render('productdetails',
			{
				id : "notfound.jpg",
				descripcion: "No existe dicho producto"
			})
		} else {
			response.render('productdetails',
			{
				id : id,
				descripcion: desc
			})
		}
	})


	module.exports = router;
$(document).ready(function(){
	$('form').on('submit', function(event) {
		console.log('Prueba');
		event.preventDefault();
		var formu = $(this);
		var datosformu = formu.serialize();
		$.ajax({type:'POST',url:'/contact', data=datosformu}).done(function(datos){
			console.log(datos);
			formu.trigger('reset');
		});
	});
});
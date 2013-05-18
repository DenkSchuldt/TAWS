function moveVerticalTo(pos,velocidad){
	$('html, body').animate({scrollTop: pos}, velocidad);
}
function position(elem){
	var offset = $('#'+elem).offset();
	return(offset.top);
}
function moveToRight(elem){					
	$(elem).animate({"right": "100%"},1000,"linear");
}
function moveToLeft(elem){
	$(elem).animate({"right": "-100%"},1000,"linear");				
}
function alertar(){
	alert('Gracias, te informaremos al respecto.');
}
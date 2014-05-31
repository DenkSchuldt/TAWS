
	var lis = $('nav li');
	var divs = $('aside div');
	
	$(".nav-toggle").on('click', function (e) {
		$('.nav-toggle').removeClass('fixed');
		$("nav").toggleClass("show");
		e.preventDefault();
	});
	
	$(function () {  		
		var msie6 = $.browser == 'msie' && $.browser.version < 7;  
		if (!msie6) {			
			var top = $('#page_two').offset().top - parseFloat($('#page_two').css('margin-top').replace(/auto/, 0));
			$(window).scroll(function (event) {						
				var y = $(this).scrollTop();            
				if (y >= top) {					
					$("header").fadeIn("fast");
				} else {        					
					$("header").fadeOut("fast");							
				}
			});
		}
	});
	
	$(function () {  		
		var msie6 = $.browser == 'msie' && $.browser.version < 7;  
		if (!msie6) {
			var top = $('.nav-toggle').offset().top - parseFloat($('.nav-toggle').css('margin-top').replace(/auto/, 0));
			$(window).scroll(function (event) {
				$("nav").removeClass("show");
				var y = $(this).scrollTop();            
				if (y >= top) {        
					$('.nav-toggle').addClass('fixed');
				} else {        
					$('.nav-toggle').removeClass('fixed');
				}
			});
		}
	});
	
	function init(){
		$(divs[0]).click(function(){window.open("https://www.facebook.com/tawsespol",'_blank')});
		$(divs[1]).click(function(){window.open("https://twitter.com/taws_espol",'_blank')});
		$(divs[2]).click(function(){window.open("https://github.com/taws",'_blank')});
		$(divs[3]).click(function(){window.open("http://feeds.feedburner.com/taws",'_blank')});
		$(divs[4]).click(function(){window.open("http://blog.espol.edu.ec/taws/",'_blank')});
		setInicio();
		setQuienes();
		setMiembros();
		setInvestigacion();
		setDesarrollo();
		setContacto();
		$("nav").removeClass("show");
	}
	
	function setInicio(){
		$(lis[0]).click(function(e){
			moveVerticalTo(position('page_one'),1000);
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setQuienes(){
		$(lis[1]).click(function(e){
			moveVerticalTo(position('page_two'),1000);
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setMiembros(){
		$(lis[2]).click(function(e){
			moveVerticalTo(position('page_tree'),1000);
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setInvestigacion(){
		$(lis[3]).click(function(e){
			moveVerticalTo(position('page_four'),1000);			
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setDesarrollo(){
		$(lis[4]).click(function(e){
			moveVerticalTo(position('page_five'),1000);
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setContacto(){
		$(lis[5]).click(function(e){
			moveVerticalTo(position('page_six'),1000);			
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function clearOthers(other){
		for(var i=0; i<lis.length; i++){
			if(lis[i] != other){
				$(lis[i]).removeAttr("class");
			}
		}
	}
	
	function moveVerticalTo(pos,velocidad){
		$('html, body').animate({scrollTop: pos}, velocidad);
	}
	function position(elem){
		var offset = $('#'+elem).offset();
		return(offset.top);
	}
	
	window.onload = init;
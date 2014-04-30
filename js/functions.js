
	var lis = $('nav li');
	var divs = $('aside div');
	var mermbers_lis = document.querySelectorAll('#member-list li');
	
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
		var t = new Trianglify();
		var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
		document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
		divs[0].addEventListener('click', function(){window.open("https://www.facebook.com/tawsespol",'_blank')});
		divs[1].addEventListener('click', function(){window.open("https://twitter.com/taws_espol",'_blank')});
		divs[2].addEventListener('click', function(){window.open("https://github.com/taws",'_blank')});
		divs[3].addEventListener('click', function(){window.open("http://feeds.feedburner.com/taws",'_blank')});
		divs[4].addEventListener('click', function(){window.open("http://blog.espol.edu.ec/taws/",'_blank')});
		setInicio();
		setQuienes();
		setMiembros();
		setInvestigacion();
		setContacto();
		$("nav").removeClass("show");
	}
	
	function setInicio(){
		lis[0].addEventListener('click',function(e){
			moveVerticalTo(position('page_one'),1000);
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setQuienes(){
		lis[1].addEventListener('click',function(e){
			moveVerticalTo(position('page_two'),1000);
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setMiembros(){
		lis[2].addEventListener('click',function(e){
			moveVerticalTo(position('page_tree'),1000);
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setInvestigacion(){
		lis[3].addEventListener('click',function(e){
			moveVerticalTo(position('page_four'),1000);			
			$(this).attr("class","selected");
			clearOthers(this);
		});
	}
	
	function setContacto(){
		lis[4].addEventListener('click',function(e){
			moveVerticalTo(position('page_five'),1000);			
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
	function moveToRight(elem){					
		$(elem).animate({"right": "100%"},1000,"linear");
	}
	function moveToLeft(elem){
		$(elem).animate({"right": "-100%"},1000,"linear");				
	}
	
	window.onload = init;
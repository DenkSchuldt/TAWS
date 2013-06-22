
	var lis = document.querySelectorAll('#main_nav li');
	var mermbers_lis = document.querySelectorAll('#member-list li');
	
	$(function () {  		
		var msie6 = $.browser == 'msie' && $.browser.version < 7;  
		if (!msie6) {			
			var top = $('#page_two').offset().top - parseFloat($('#page_two').css('margin-top').replace(/auto/, 0));
			$(window).scroll(function (event) {						
				var y = $(this).scrollTop();            
				if (y >= top) {					
					$("#logo").fadeIn("fast");					
				} else {        					
					$("#logo").fadeOut("fast");							
				}
			});			
		}  
	});

	$(function(){
		var pull = $('#pull');
		var menu = $('#main_nav ul');				
		var menuHeight = menu.height();		
		$(pull).on('click', function(e){
			e.preventDefault();
			menu.slideToggle();
		});
		$(window).resize(function(){
			var w = $(window).width();
			
		});
	});
	
	function init(){		
		for(var a=0; a<mermbers_lis.length; a++){
			mermbers_lis[a].style.fontWeight = "normal";
		}
		lis[0].setAttribute('id','inicio');
		lis[0].addEventListener('click',function(){
			moveVerticalTo(position('page_one'),1000);
			this.setAttribute('id','inicio');
			for(var i=0; i<lis.length; i++){
				if(lis[i] != this){
					lis[i].setAttribute('id');
				}
			}
		},false);
		lis[1].addEventListener('click',function(){
			moveVerticalTo(position('page_two'),1000);
			this.setAttribute('id','quienes');
			for(var i=0; i<lis.length; i++){
				if(lis[i] != this){
					lis[i].setAttribute('id');
				}
			}
		},false);
		lis[2].addEventListener('click',function(){
			moveVerticalTo(position('page_tree'),1000);
			this.setAttribute('id','miembros');
			for(var i=0; i<lis.length; i++){
				if(lis[i] != this){
					lis[i].setAttribute('id');
				}
			}
		},false);
		lis[3].addEventListener('click',function(){
			moveVerticalTo(position('page_four'),1000);			
			this.setAttribute('id','investigacion');
			for(var i=0; i<lis.length; i++){
				if(lis[i] != this){
					lis[i].setAttribute('id');
				}
			}
		},false);
		lis[4].addEventListener('click',function(){
			moveVerticalTo(position('page_five'),1000);
			this.setAttribute('id','contacto');
			for(var i=0; i<lis.length; i++){
				if(lis[i] != this){
					lis[i].setAttribute('id');
				}
			}
		},false);
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
	function alertar(){
		alert('Gracias, te informaremos al respecto.');
	}	
	
	window.onload = init;
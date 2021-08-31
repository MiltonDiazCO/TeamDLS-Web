"use strict"

// funcion de calcular la altura del sidebar
function heightSidebar() {
	var varHeight = document.getElementById("posts").clientHeight - 860;	
	document.getElementById('sidebar3').style.height = varHeight + "px";	
}

// header responsive
function showContent(){
	var btn_menu = document.getElementById("btn_menu");
	var patrocinadores = document.getElementById("patrocinadores");
	var main = document.getElementById("main");
	var footer = document.getElementById("footer");
	var x = window.matchMedia("(max-width: 992px)");
		
	if (x.matches) {
		patrocinadores.style.display = 'none';

		if (btn_menu.checked) {
			patrocinadores.style.display = 'block';
			main.style.display = 'none';
			footer.style.display = 'none';
		} else {
			patrocinadores.style.display = 'none';
			main.style.display = 'block';
			footer.style.display = 'block';
		}
			
	} else {
		patrocinadores.style.display = 'block';

	}
}

// boton ir_Arriba
$(document).ready(function(){

	// var xp = document.getElementById('main');
	// var xp2 = xp.offsetHeight -500;

	$(window).scroll(function() {
    	if ($(this).scrollTop() > 0) {
        	$('.ir-arriba').fadeIn('slow');
        	// $('.ir-arriba').css("top", xp);
    	} else {
        	$('.ir-arriba').fadeOut('slow');
    	}
	});

	$('.ir-arriba').click(function(event) {
    	event.preventDefault();
    	$('html, body').animate({scrollTop: 0}, 600);
	});
});
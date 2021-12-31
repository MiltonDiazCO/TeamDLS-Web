"use strict"

function cargarFuncionesInicio(indexPage) {
	heightSidebar();
	marginBotonIrArriba(indexPage);
}

// funcion para calcular la altura del sidebar
function heightSidebar() {
	var alturaSidebar = document.getElementById("sidebar");

	var Height = (document.getElementById("posts").clientHeight - alturaSidebar.clientHeight) + 10;
	document.getElementById('sidebar-fill').style.height = Height + "px";	
}

// funcion para calcular el margen derecho del boton de ir arriba
function marginBotonIrArriba(indexPage) {
	var anchoMain = document.getElementById("main").clientWidth;
	var anchoVentana = window.innerWidth;

	if(!indexPage) {
		var margenExtra = 5;
	} else {
		var margenExtra = 20;
	}

	document.getElementById("ir-arriba").style.right = ((anchoVentana - anchoMain) / 2) + margenExtra + "px";

	var x = window.matchMedia("(max-width: 767px)");
	var y = window.matchMedia("(max-width: 412px)");

	if(x.matches) {
		document.getElementById("ir-arriba").style.right = '25px';
		document.getElementById("ir-arriba").style.top = '85%';
	} 

	if (y.matches) {
		document.getElementById("ir-arriba").style.padding = '16px';
		document.getElementById("ir-arriba").style.fontsize = '12px';
	}
}

// funcion para mostrar el menu responsive
function showMenuResponsive() {
	var btnShow = document.getElementById("btn-showMenuResposive");
	var menu = document.getElementById("menuResponsive");
	var main = document.getElementById("main");
	var footer = document.getElementById("footer");

	if(btnShow.checked) {
		menu.style.display = 'block';
		main.style.display = 'none';
		footer.style.display = 'none';
	} else {
		menu.style.display = 'none';
		main.style.display = 'block';
		main.style.display = 'block';
	}
}

// mostrar filtros de busqueda
function showFilters() {
	var filters = document.getElementById("filters");	

	var btnShowFilters = document.getElementById("btn-showFilters");
	var labelShowFilters = document.getElementById("label-showFilters");
	var btnHideFilters = document.getElementById("btn-hideFilters");
	var labelHideFilters = document.getElementById("label-hideFilters");	
	
	if(btnShowFilters.checked) {
		filters.style.display = 'block';
		btnShowFilters.style.display = 'none';
		labelShowFilters.style.display = 'none';

		btnHideFilters.checked = false;
		btnHideFilters.style.display = 'inline-block';
		labelHideFilters.style.display = 'inline-block';
	}
}

// ocultar filtros de busqueda
function hideFilters() {
	var filters = document.getElementById("filters");

	var btnShowFilters = document.getElementById("btn-showFilters");
	var labelShowFilters = document.getElementById("label-showFilters");
	var btnHideFilters = document.getElementById("btn-hideFilters");
	var labelHideFilters = document.getElementById("label-hideFilters");

	if(btnHideFilters.checked) {
		filters.style.display = 'none';
		btnHideFilters.style.display = 'none';
		labelHideFilters.style.display = 'none';

		btnShowFilters.checked = false;
		btnShowFilters.style.display = 'inline-block';
		labelShowFilters.style.display = 'inline-block';
	}
}

// boton ir_Arriba
$(document).ready(function(){
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

// funcion para obtener el link de un uniforme o escudo
function getLinkImg(linkImg, labelName) {
	var aux = document.createElement("input");
	aux.setAttribute("value", linkImg);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);

	// mostrar label de url
	var label = document.getElementById(labelName);
	label.style.display = 'block';
}
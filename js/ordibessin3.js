// JavaScript Document
/* BOURDEL Raphaël */
$(document).ready(function(){
	
	$(".btn-nav").click(function(){
		
		$("#menuresp").toggleClass('isOpen');
		$(".barre1").toggleClass('action');
		$(".barre2").toggleClass('action');
		$(".barre3").toggleClass('action');
	});
	
});
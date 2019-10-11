// JavaScript Document
/*BOURDEL Raphaël*/

$(function(){
	
	var video = document.getElementById("video");
	
	$("#video").fadeOut(0);
	
	setTimeout(function(){
		
		$("#video").fadeIn(8000);
		video.volume = 0;
		video.play();
	},1500);
	
});
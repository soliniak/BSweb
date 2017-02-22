$(document).ready(function(){
	$(".simple-button").mousedown(function(){
		$(this).addClass("click-anim-button");
	});	
	$(".simple-button").on('mouseup mouseout', function(){
		$(this).removeClass("click-anim-button");
	});
});	
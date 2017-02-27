$(document).ready(function(){
	$(".simple-button").on("mousedown", function(){
		$(this).addClass("click-anim-button");
	}).on('mouseup mouseout', function(){
		$(this).removeClass("click-anim-button");
	});

	$(".open-up").on("click", function(){
		$(".header-footer-contact").toggle("header-footer-contact-click");
		$(".header-footer").toggle("header-footer-click");
	});

});	
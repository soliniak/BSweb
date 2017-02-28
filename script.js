$(document).ready(function(){
	$(".simple-button").on("mousedown", function(){
		$(this).addClass("click-anim-button");
	}).on('mouseup mouseout', function(){
		$(this).removeClass("click-anim-button");
	});

	$(".open-up").on("click", function(){
		$(".header-footer").toggleClass("header-footer-click");
		$(".header-footer-contact").toggleClass("header-footer-contact-click");
		$(".main-menu").toggleClass("main-menu-click");
		$(".open-up").toggleClass("rotate");
	});


});	
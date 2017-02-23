'use strict';


// --- MAIN SLIDER

$(function(){
	// configuration
	var width = 1400;
	var speed = 500; //1000ms = 1s
	var pause = 3000;
	var currentSlide = 1;

	// DOM cache
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var $progressBar = $slider.find('.baner-progressbar');

	var interval;

	function startSlider(){

		$progressBar.animate({'width': '100%'}, pause);
		$progressBar.animate({'width': '0%'}, 10);

		interval = setInterval(function(){

			$slideContainer.animate({'margin-left': '-='+width}, speed, function(){
				currentSlide++;
				$progressBar.animate({'width': '0%'}, 150);
				if(currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
				$progressBar.animate({'width': '100%'}, pause - speed);

			});
		}, pause);
	}

	$slider.on('mouseleave', startSlider).hover(function() {
        $progressBar.stop(function(){});
        clearInterval(interval);
        }, function() {});

	startSlider();
});


// --- SECTION SLIDER

$(function(){
	var $sectionSlider = $('.gallery-slider-container');
	var $prevBtn = $('.gallery-slider-prev');
	var $nextBtn = $('.gallery-slider-next');


	$prevBtn.click(function(){
		$sectionSlider.animate({'margin-left': '-=300px'}, 1000);
	});
	$nextBtn.click(function(){
		if(!$sectionSlider.css('margin-left') == "0"){
			$sectionSlider.animate({'margin-left': '+=300px'}, 1000);
		}
	});
});

'use strict';

// --- MAIN SLIDER

$(function(){

	// DOM cache
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var $progressBar = $slider.find('.baner-progressbar');

	// configuration
	var width = $slides.width();
	var speed = 500; //1000ms = 1s
	var pause = 3000;
	var currentSlide = 1;

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
	var $gallerySection = $('.gallery');
	var $sectionSlider = $gallerySection.find('.gallery-slider-container');
	var $leftBtn = $('.gallery-slider-left');
	var $rightBtn = $('.gallery-slider-right');
	var $picSection = $sectionSlider.find('.gallery-section');
	var amount = 4;
	var placer = 1;

	var picWidth = $gallerySection.width() / amount;
	var ulGalSlider = picWidth * $picSection.length;
	var clicks = $picSection.length - amount + 1;

	$sectionSlider.css('width', ulGalSlider);
	$picSection.css('width', picWidth);

	$leftBtn.click(function(){
		placer++;
		$sectionSlider.animate({'margin-left': '-='+picWidth}, 1000);
		$rightBtn.attr("disabled", false);
		if(placer >= clicks){
			$leftBtn.attr("disabled", true);
		}
	});

	$rightBtn.click(function(){
		placer--;
		$sectionSlider.animate({'margin-left': '+='+picWidth}, 1000);
		$leftBtn.attr("disabled", false);
		if(placer <= "1"){
			$rightBtn.attr("disabled", true);
		}
	});
});

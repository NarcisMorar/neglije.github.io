// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "img/poza1.jpg",
	 		 "img/poza2.jpg",
			 "img/poza3.jpg",
       "img/poza4.jpg",
	 		 "img/poza5.jpg",
			 "img/poza6.jpg",
       "img/poza7.jpg",
	 		 "img/poza8.jpg",
			 "img/poza9.jpg"

	 			], 	{duration: 3200, fade: 1300});
		});
})

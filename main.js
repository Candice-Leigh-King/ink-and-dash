
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
		});

// put class of exit on elements to make them navigate back to page-nav
			$(".exit").click(function(){

				$(this).toggleClass('active');
				$(".page-nav").fadeToggle();
			});

			// end hamburger menu

$(document).ready(function(){
		$('.one-time').slick({
dots: true,
infinite: true,
draggable: true,
speed: 1000,
slidesToShow: 1,
 autoplay: true,
adaptiveHeight: true
});
});
});

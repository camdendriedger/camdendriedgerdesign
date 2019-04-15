$(document).ready(function() {





	$(".menu-button").on("click", function() {

    $(".sidebar").css("width", "100%");

		$(".sidebar").css("position", "fixed");

		$(".sidebar").css("background-color", "rgba(238, 238, 238, 0.9)");

		$(".grid-container").css("width", "100%");

		$(".nav-list").css("display", "none");

		$(".mobile-nav").css("right", "0");

		$(".menu-button").css("bottom", "5vh");

		$(".menu-close-button-link").css("display", "flex");

		$(".menu-button-svg.1").css("transform", "rotate(-45deg)");

		$(".menu-button-svg.3").css("transform", "rotate(45deg)");

		$(".menu-button-svg.2").css("opacity", "0");

		$(".menu-button-svg").css("position", "absolute");

		$(".menu-button-svg").css("width", "50px");

})



$(".menu-close-button-link").on("click", function() {

    $(".sidebar").css("width", "50px");

		$(".sidebar").css("position", "sticky");

		$(".sidebar").css("background-color", "eee");

		$(".grid-container").css("width", "calc (100% - 50px)");

		$(".nav").css("display", "block");

		$(".nav-list").css("display", "block");

		$(".mobile-nav").css("right", "200%");

		$(".menu-button").css("bottom", "0");

		$(".menu-close-button-link").css("display", "none");

		$(".menu-button-svg.1").css("transform", "rotate(0)");

		$(".menu-button-svg.3").css("transform", "rotate(0)");

		$(".menu-button-svg.2").css("opacity", "1");

		$(".menu-button-svg").css("position", "relative");

		$(".menu-button-svg").css("width", "25px");

})


$(".link-close-button").on("click", function() {

    $(".sidebar").css("width", "50px");

		$(".sidebar").css("position", "sticky");

		$(".sidebar").css("background-color", "eee");

		$(".grid-container").css("width", "calc (100% - 50px)");

		$(".nav").css("display", "block");

		$(".nav-list").css("display", "block");

		$(".mobile-nav").css("right", "200%");

		$(".menu-button").css("bottom", "0");

		$(".menu-close-button-link").css("display", "none");

		$(".menu-button-svg.1").css("transform", "rotate(0)");

		$(".menu-button-svg.3").css("transform", "rotate(0)");

		$(".menu-button-svg.2").css("opacity", "1");

		$(".menu-button-svg").css("position", "relative");

		$(".menu-button-svg").css("width", "25px");

})






$(".sales-link").on("click", function() {

    $(".print-sales").css("display", "flex");

})


$(".print-sales.button").on("click", function() {

    $(".print-sales").css("display", "none");

})








				$(document).on("scroll", onScroll);

				//smoothscroll
				$('a[href^="#"]').on('click', function(e) {
					e.preventDefault();
					$(document).off("scroll");

					$('a').each(function() {
						$(this).removeClass('active');
					})
					$(this).addClass('active');

					var target = this.hash,
						menu = target;
					$target = $(target);
					$('html, body').stop().animate({
						'scrollTop': $target.offset().top + 2
					}, 500, 'swing', function() {
						window.location.hash = target;
						$(document).on("scroll", onScroll);
					});
				});
			});

			function onScroll(event) {
				var scrollPos = $(document).scrollTop();
				$('#nav-center a').each(function() {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
						$('#nav-center ul li a').removeClass("active");
						currLink.addClass("active");
					} else {
						currLink.removeClass("active");
					}
				});
			}










/*

	$(document).ready(function () {


			// Add smooth scrolling to all links
    	$("a").on('click', function (event) {

    		// Make sure this.hash has a value before overriding default behavior
    		if (this.hash !== "") {
    			// Prevent default anchor click behavior
    			event.preventDefault();

    			// Store hash
    			var hash = this.hash;

    			// Using jQuery's animate() method to add smooth page scroll
    			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    			$('html, body').animate({
    				scrollTop: $(hash).offset().top
    			}, 800, function () {

    				// Add hash (#) to URL when done scrolling (default click behavior)
    				window.location.hash = hash;
    			});
    		} // End if
    	});

			*/






		$(window).scroll(function(){
    $(".cover").css("opacity", 1 - $(window).scrollTop() / 900);
  });

		$(window).scroll(function(){
    $(".grid-container").css("opacity", 0 + $(window).scrollTop() / 400);
  });

	$(window).scroll(function(){
    $(".sidebar").css("opacity", 0 + $(window).scrollTop() / 400);
  });

	$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 200);
  });

	$(window).scroll(function(){
    $(".cover-text").css("opacity", 1 - $(window).scrollTop() / 200);
  });

	$(window).scroll(function(){
    $(".sidebar-fill").css("opacity", 0 + $(window).scrollTop() / 400);
  });

		$(window).scroll(function(){
    $(".sidebar-fill-2").css("opacity", 0 + $(window).scrollTop() / 1200);
  });

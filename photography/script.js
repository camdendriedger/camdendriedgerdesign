  






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
		
		
		
		
		
// Paralax scrolling code - works fine but leaves white space at the bottom that I can't fugure out how to fix yet. 		
/*	
		
	$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});
		
*/
		

		
		
		
		

		
		
		
		
		
		
		
// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
		
		
		
		
    });
		
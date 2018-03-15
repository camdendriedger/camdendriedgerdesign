    $(document).ready(function(){
        
        
        
        
        
        
        
   // Add smooth scrolling to all links
  $("a").on('click', function(event) {

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
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });     
        
        
        
        
        
        
        
        
        
//branding 1
        
        
        $('#logo1js').click(function() {
    $('#wrapper-1-1').toggle();
}); 
        
        $('#close-button-1-1').click(function() {
    $('#wrapper-1-1').toggle();
}); 
        

//branding 2

        
   $('#logo2js').click(function() {
    $('#wrapper-1-2').toggle();
}); 
        
        $('#close-button-1-2').click(function() {
    $('#wrapper-1-2').toggle();
}); 
        
    
        
        
//branding 3
        
        
        $('#logo3js').click(function() {
    $('#wrapper-1-3').toggle();
}); 
        
        $('#close-button-1-3').click(function() {
    $('#wrapper-1-3').toggle();
}); 
        

//branding 4

        
   $('#logo4js').click(function() {
    $('#wrapper-1-4').toggle();
}); 
        
        $('#close-button-1-4').click(function() {
    $('#wrapper-1-4').toggle();
}); 
        
        
        
        
//branding 5
        
        
        $('#logo5js').click(function() {
    $('#wrapper-1-5').toggle();
}); 
        
        $('#close-button-1-5').click(function() {
    $('#wrapper-1-5').toggle();
}); 
        

        
//branding 6

        
   $('#logo6js').click(function() {
    $('#wrapper-1-6').toggle();
}); 
        
        $('#close-button-1-6').click(function() {
    $('#wrapper-1-6').toggle();
}); 
        
        
        
        
//branding 7

        
   $('#logo7js').click(function() {
    $('#wrapper-1-7').toggle();
}); 
        
        $('#close-button-1-7').click(function() {
    $('#wrapper-1-7').toggle();
}); 
        
        
        
        
//branding 8

        
   $('#logo8js').click(function() {
    $('#wrapper-1-8').toggle();
}); 
        
        $('#close-button-1-8').click(function() {
    $('#wrapper-1-8').toggle();
}); 
        
        
        
        
        
//branding 9

        
   $('#logo9js').click(function() {
    $('#wrapper-1-9').toggle();
}); 
        
        $('#close-button-1-9').click(function() {
    $('#wrapper-1-9').toggle();
}); 
        
        
        
        
        
        
        
        
        
//print
        
        
        
        
        
        
//print 1
        
        
        $('#print1js').click(function() {
    $('#wrapper-2-1').toggle();
}); 
        
        $('#close-button-2-1').click(function() {
    $('#wrapper-2-1').toggle();
}); 
        
        
        
        
        
//print 2
        
        
        $('#print2js').click(function() {
    $('#wrapper-2-2').toggle();
}); 
        
        $('#close-button-2-2').click(function() {
    $('#wrapper-2-2').toggle();
}); 
        
        
        

//print 3
        
        
        $('#print3js').click(function() {
    $('#wrapper-2-3').toggle();
}); 
        
        $('#close-button-2-3').click(function() {
    $('#wrapper-2-3').toggle();
}); 
        
        
        
//print 4
        
        
        $('#print4js').click(function() {
    $('#wrapper-2-4').toggle();
}); 
        
        $('#close-button-2-4').click(function() {
    $('#wrapper-2-4').toggle();
}); 
        
       
        
//print 5
        
        
        $('#print5js').click(function() {
    $('#wrapper-2-5').toggle();
}); 
        
        $('#close-button-2-5').click(function() {
    $('#wrapper-2-5').toggle();
}); 
      

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
        //window.onresize = function(){ location.reload(); }
        
        if ( $(window).outerWidth() > 644) {      
  //Add your javascript for large screens here 
} 
else {
   $('#menu-button').click(function() {
    $('.nav').toggle();
})
        
        
        $('.nav-list-item-link').click(function() {
    $('.nav').toggle();
}); 
    
}
    
       
    
        });


$(document).ready(function() {

    $(".hoverbox").on("mouseenter", function(){

        $(".overlay").stop(true, true).fadeIn();

    });

    $(".hoverbox").on("mouseleave", function(){

        $(".overlay").stop(true, true).fadeOut();

    });

    $(".hoverbox2").on("mouseenter", function(){

        $(".overlay2").stop(true, true).fadeIn();

    });

    $(".hoverbox2").on("mouseleave", function(){

        $(".overlay2").stop(true, true).fadeOut();

    });

    $(".hoverbox3").on("mouseenter", function(){

        $(".overlay3").stop(true, true).fadeIn();

    });

    $(".hoverbox3").on("mouseleave", function(){

        $(".overlay3").stop(true, true).fadeOut();

    });

    $(".hoverbox4").on("mouseenter", function(){

        $(".overlay4").stop(true, true).fadeIn();

    });

    $(".hoverbox4").on("mouseleave", function(){

        $(".overlay4").stop(true, true).fadeOut();

    });

});


(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

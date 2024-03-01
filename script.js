(function($) {
  $(function() {
    var $navList = $('nav ul');
    var $navbarToggle = $('#navbar-toggle');

    // Open and close nav 
    $navbarToggle.click(function() {
      $navList.slideToggle();
    });

    // Hamburger toggle
    $navbarToggle.on('click', function() {
      $(this).toggleClass('active');
    });

    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when selecting another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });

    // Handle window resize
    $(window).on('resize', function() {
      if ($(window).width() > 768) {
        // Show the navigation menu if the window is larger than 768 pixels
        $navList.show();
        
        // Hide all dropdowns
        $('.navbar-dropdown').hide();
      } else {
        // Hide the navigation menu if the window is 768 pixels or smaller
        $navList.hide();
        $navbarToggle.removeClass('active');
      }
    });
  });
})(jQuery);











// -----------placememt-----------

$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

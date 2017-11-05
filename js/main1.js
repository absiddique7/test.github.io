(function ($) {
	"use strict";
    
    
        
           $(window).on("load", function() {
            $(".loader").fadeOut();
            $("#preloader").delay(350).fadeOut("slow");
            $("body").delay(350).css({ "overflow": "visible" });
            $(".all-container").css({ "opacity": "1" });
        });

            /*--------------------------------
      2. Start Smooth Scrolling
    ----------------------------------*/
    function smoothScroll() {
        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on("click",function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
              location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000,"easeInOutExpo", function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  }
                });
              }
            }
        });
        jQuery.extend( jQuery.easing,{
            easeInOutExpo: function (x, t, b, c, d) {
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        });
    }
    // Applying Smooth Scroll When The Browser Is Not Opera Mini Or UC Browser
    if (navigator.userAgent.indexOf('Opera Mini') == -1 || navigator.userAgent.indexOf('UCBrowser') != -1){
        smoothScroll();
    }
    /*--------------------------------
        2. End Smooth Scrolling
    ----------------------------------*/

    /*--------------------------------
  	 3. Start Header
    ----------------------------------*/
    // Initiating Background Slider
    var backgroundSlide = $('#background-slide');
    backgroundSlide.owlCarousel({
        loop:true,
        items:1,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        animateOut: 'fadeOut'
    });
    $('.slider-prev-button').on("click",function(){
        backgroundSlide.trigger('prev.owl.carousel');
    });
    $('.slider-next-button').on("click",function(){
        backgroundSlide.trigger('next.owl.carousel');
    });
    // Setting Up Background Images
    function SliderBackground() {
        if ($(".owl-full-width .slider").length) {
            $(".owl-full-width .slider").each(function() {
                var $this = $(this);
                var img = $this.children(img);
                var imgSrc = img.attr("src");
                $this.css({
                    backgroundImage: "url("+ imgSrc +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                });
            });
        }
    }
    // Initializing Background Setting Function
    SliderBackground();
    // Toggle Fullscreen Navigation
    $('#burger').on("click",function(){
        $(".fullscreen-nav-container").slideToggle(400);
    });
    $(".fullscreen-nav-holder a, .turn-home").on("click",function(){
        $("#burger").trigger("click");
    });
  


}(jQuery));	
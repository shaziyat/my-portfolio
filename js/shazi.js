(function($) {
    "use strict"; // Start of use strict

    if(location.hash) {
        $(function() {
            $('body').scrollspy({
                target: '.sidebar-wrapper',
                offset: 51
            });

            setTimeout(function() { window.scrollBy(0, 1); }, 1);
        });
    } else {
        $(function() {
            $('body').scrollspy({
                target: '.sidebar-wrapper',
                offset: 51
            });
        });
    }
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 300, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 0
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
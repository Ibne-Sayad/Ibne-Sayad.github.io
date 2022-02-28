/***
Name: Redsume Resume Template
Version: 1.0
Author: ThemeRed
Author URL: http://themered.com

================================
INDEX
================================
1. Preloader
2. Smooth Scroll
3. WOW
4. Stretchy Navbar 
5. Cycle Text
6. Sticky Sidebar
7. Owl Carousel for Awards
8. Portfolio Filtering
9. Magnifying pop up
10. Verticle Testimonial
11. Ajax Contact Form
12. Scroll to Top
**/

(function($) {
'use strict';
    
    /**================================ 
    Preloader
    ================================**/
    var $preloader = $('#preloader');
    
    $(window).on('load', function(){
        $preloader.delay(300).fadeOut('slow',function(){
            $preloader.remove();
        });    
    }); // $(window).on end
    /**================================ 
    End of Preloader 
    ================================**/
    
    /**================================ 
    Smooth Scroll 
    ================================**/
    var $a_smooth_scroll = $('a.smoothScroll'),
    $htmlbody = $('html,body');
    
    $a_smooth_scroll.on('click', function(e){       
        var toTop, windowSize = $(window).width();
        windowSize >= 768 ? toTop = 80:toTop = 0;
        e.preventDefault();
        $htmlbody.animate({scrollTop:$(this.hash).offset().top - toTop}, 2000);
    });
    /**================================ 
    End of Smooth Scroll 
    ================================**/

    /**================================ 
    WOW 
    ================================**/
    var wowSel = 'wow';
    
    var wow = new WOW({
        boxClass: wowSel,
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {
            
        },
        scrollContainer: null
    });
    wow.init();
    /**================================ 
    End of WOW 
    ================================**/
    
    /**================================ 
    Stretchy Navbar 
    ================================**/
    var stretchyNav = $('.stretchy-nav'),
        stretchyNavMed = 'sticky-menu nav-is-visible',
        navTrigger = '.nav-trigger',
        navTriggerSpan = '.nav-trigger span',
        navVisible = 'nav-is-visible',
        stretchyNavWidth = 'width-menu nav-is-visible',
        stretchyNavLar = 'sticky-menu nav-is-visible width-menu';
        
    if( stretchyNav.length > 0 ) {
		stretchyNav.each(function(){
			var stretchyNavThis = $(this),
				stretchyNavTrigger = stretchyNavThis.find(navTrigger);
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNavThis.toggleClass(navVisible);
			});
		});
		$(document).on('click', function(event){
			( !$(event.target).is(navTrigger) && !$(event.target).is(navTriggerSpan) );
		});
	}
    
    $(window).on('scroll', function() {
        var windowSize = $(window).width();
        if($(window).scrollTop() > 200 && windowSize >= 768) {
            stretchyNav.addClass(stretchyNavMed);   
            if($(window).scrollTop() >= 900) {
                stretchyNav.addClass(stretchyNavWidth);
            }
        } else {
            stretchyNav.removeClass(stretchyNavLar);
            stretchyNav.removeClass(stretchyNavWidth);
        } 
        
         
    });
    
    /**================================ 
    End of Stretchy Navbar 
    ================================**/
    
    /**================================ 
    Cycle Text 
    ================================**/
    var cycleTextSel = $('.intro-content > h1');
    
    cycleTextSel.cycleText({
        animation: 'bounceIn',
        interval: 3000
    });
    /**================================ 
    End of Cycle Text 
    ================================**/
    
    /***================================ 
    Sticky Sidebar 
    ================================**/
    var stick = $('.stick'),
        stickRow = '.row';
    stick.stickySidebar({
        topSpacing: 110,
        containerSelector: stickRow
    });
    /***================================ 
    End if Sticky Sidebar
    ================================**/
    
    /***================================ 
    Owl Carousel for Awards 
    ================================**/
    var awardsSlide = $('.owl-carousel-aw');
    awardsSlide.owlCarousel({
	    loop:true,
	    margin:10,
	    rewind: true,
	    autoplay: true,
	    autoplayTimeout: 2000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
    /***================================ 
    End Owl Carousel for Awards 
    ================================**/
    
    /**================================ 
    Portfolio Fiiltering 
    ================================**/
    function portfolio_init() {
        var portfolio_grid = $('.portfoliolist'),
            portfolio_filter = $('#filters'),
            filter = $('#filters .filter');

        if (portfolio_grid) {
            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: '.portfolio '
            });
            portfolio_filter.on('click', '.filter', function (e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                filter.parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
            });
        }
    }
    portfolio_init();
    /**================================ 
    End Portfolio Fiiltering 
    ================================**/
    
    /**================================ 
    Magnifying Pop Up 
    ================================**/
    var mag_pop = $('.mag-pop'); 
    mag_pop.magnificPopup({
        type:'image', 
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        },
        removalDelay: 300
    });
    /**================================ 
    End of Magnifying Pop Up 
    ================================**/
    
    /**================================ 
    Verticle Testimonial 
    ================================**/
    var testSlide = $('.owl-carousel-test');
    testSlide.owlCarousel({
	    loop:true,
        mouseDrag: false,
        touchDrag: false,
        items: 1,
	    rewind: true,
	    autoplay: true,
	    autoplayTimeout: 5000,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp'
	});
    /**================================ 
    End of Verticle Testimonial 
    ================================**/
    
    /**================================ 
    End of Ajax Contact Form
    ================================**/
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).on('submit', function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

            // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            var $formMessages = $(formMessages);
            
            // Make sure that the formMessages div has the 'success' class.
            $formMessages.removeClass('alert alert-danger alert-dismissable fade in error');
            $formMessages.addClass('alert alert-success alert-dismissable fade in success');

            // Set the message text.
            $formMessages.text(response).append('<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>');

            var $name = $('#name'),
            $email = $('#email'),
            $message = $('#message');
            
            // Clear the form.
            $name.val('');
            $email.val('');
            $message.val('');
        })

        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $formMessages.removeClass('alert alert-success alert-dismissable fade in success');
            $formMessages.addClass('alert alert-danger alert-dismissable fade in error');

            // Set the message text.
            if (data.responseText !== '') {
                $formMessages.text(data.responseText).append('<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>');
            } else {
                $formMessages.text('Oops! An error occured and your message could not be sent.').append('<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>');
            }
        });

    });
    /**================================ 
    End of Ajax Contact Form
    ================================**/

    /**================================ 
    Scroll To Top 
    ================================**/
    var scrollToTop = $('.scroll-to-top');
    
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    scrollToTop.on('click', function(e) {
        e.preventDefault();
        $htmlbody.animate({scrollTop : 0}, 800);
    });

    /**================================ 
    End of Scroll To Top 
    ================================**/
    
})(jQuery);

$(function() {
	var overlayEl = $('.popup-overlay'),
		navTop = $('#nav').offset().top;
	
	$('.animated-column').each(function() {
		var el = $(this),
			height = +el.attr('data-height'),
			number = 0,
			numberHolder = el.next(),
			intervalDuration,
			animationDuration = 1000,
			intervalInst;
		
		intervalDuration = animationDuration / height;
		el.one('custom.animate', function() {
			el.css('height', height*2);
			intervalInst = setInterval(function() {
				number += 1;
				numberHolder.html(number + '%');
				if (number == height) {					
					clearInterval(intervalInst);
				}
			}, intervalDuration);
		});
	});


    $('.parallax-window').parallax({imageSrc: 'images/header-cat.jpg'});

    $('.scroll-page-up').on('click', function() {
    	$('body').animate({
        	scrollTop: 0
      	}, 300);
    });

    $('.scroll-page-up').on('mouseover', function() {
    	$(this).animate({
        	opacity: 1
      	}, 100);
    });

    $('.scroll-page-up').on('mouseleave', function() {
    	$(this).animate({
        	opacity: 0.6
      	}, 100);
    });
    
    $(window).on('resize', function() {
    	navTop = $('#nav').offset().top;
    });

    $(window).on('scroll', function() {

    	if( $(this).scrollTop() > 0 ) {
    		$('.scroll-page-up').fadeIn('fast');
    	} else {
    		$('.scroll-page-up').fadeOut('fast');
    	}


    	if ( $(this).scrollTop() > navTop && $('#nav').hasClass('def') ) {
    		$('#nav').removeClass('def').addClass('fixed');
    	} else if ( $(window).scrollTop() <= navTop && $('#nav').hasClass('fixed') ) {
    		$('#nav').removeClass('fixed').addClass('def');
    	}

    	$('.animated-column').each(function() {
    		if ( ( $(window).scrollTop() + $(window).height() ) > $(this).offset().top ) {
    			$(this).trigger('custom.animate');
    		}
    	});

    	$('.a-default').each(function() {
    		var self = this;
    		if ( ( $(window).scrollTop() + $(window).height() ) > $(this).offset().top ) {
    			var delay = $(self).attr('data-delay') || 0;
    			setTimeout(function() {
    				$(self).removeClass('a-start');
    			}, delay)
    		}
    	});
    	
    });
   

    $('#nav').on('click', 'a', function(event) {
    	event.preventDefault();

    	$('.drop-nav').slideUp(400, function(){
    		$('.glyphicon-menu-hamburger').removeClass('active');
    	});
    	
    	var id = $(this).attr('href'),
    		top = $(id).offset().top;

    	$('body').animate({
    		scrollTop: top
    	}, 700)
    });

    $('.glyphicon-menu-hamburger').on('click', function() {
    	var self = this;
    	if ( $(this).hasClass('active') ) {
    		$('.drop-nav').slideUp(400, function(){
    			$(self).removeClass('active');
    		});
    	} else {
    		$('.drop-nav').slideDown(400, function() {
    			$(self).addClass('active');
    		});
    	}
    });

    $('.around').on('click', function() {
    	$('body').animate({
    		scrollTop: navTop
    	}, 700)
    });


    $('#table').on('mouseover', 'td', function() {
    	$(this).animate({
    		fontSize : '20px'
    	}, 300);
    });

    $('#table').on('mouseover', 'td', function() {
    	$(this).animate({
    		fontSize : '16px'
    	}, 300);
    });



    $('.trigger-popup').on('click', function() {
    	var popupClass = $(this).attr('data-popup'),
    		popupEl = $('.' + popupClass);
    		
    	popupEl.show();
    	overlayEl.show();
    	$('body').addClass('fixed-body');
    });

    $('.close').on('click', function() {

    	$('.popup').hide();
    	overlayEl.hide();
    	$('body').removeClass('fixed-body');
    });


    overlayEl.on('click', function() {

    	$('.popup').hide();
    	overlayEl.hide();
    	$('body').removeClass('fixed-body');
    });

})

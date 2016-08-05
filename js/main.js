// var stickyNavOffset = $('#logo').offset().top;


// $(window).on('scroll', function() {
// 	var currentScroll = $(window).scrollTop();
	
// 	if ( currentScroll >= stickyNavOffset) {
// 		$('#logo').addClass('scrolledLogo');
// 		// $('.main-nav').css('background-color','#F07057');

// 	}

// 	else {
// 		$('#logo').removeClass('scrolledLogo');
// 		// $('.main-nav').css('background-color','white');
// 	}

// });

var stickyNavOffset2 = $('#formWrapper').offset().top;


$(window).on('scroll', function() {
	var currentScroll2 = $(window).scrollTop();
	
	if ( currentScroll2 >= stickyNavOffset2) {
		$('#formWrapper').addClass('scrolledForm');
		$("#headerBar").fadeIn();
		// $('.main-nav').css('background-color','#F07057');

	}

	else {
		$('#formWrapper').removeClass('scrolledForm');
		$("#headerBar").fadeOut();
		// $('.main-nav').css('background-color','white');
	}

});
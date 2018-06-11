$(document).ready(function() {

	$('.slide-section').click(function(e) {
		
		var linkHref = $(this).attr('href');
		var headerHeight = $('nav').outerHeight();
		console.log(headerHeight);

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - 45 
		}, 1200);

		e.preventDefault();
	});

});
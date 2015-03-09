$(document).ready(function() {

	function sectionPromoHeight() {
		$('.promo').css('min-height', $(window).height() - $('header').height());
	}
	sectionPromoHeight();

	$(window).resize(function() {
		sectionPromoHeight();
	});

	$('.promo').parallax({
		imageSrc: 'pics/promo-bg.jpg'
	});

	// h2 and .section-description animation

	// function headingAndDescrAnimation(selector, animation) {
	// 	$(selector).on('mouseenter', function() {
	// 		$(selector + ' h2').addClass('animated ' + animation);
	// 		$(selector + ' .section-description').addClass('animated ' + animation);
	// 	});

	// 	$(selector).on('mouseleave', function() {
	// 		$(selector + ' h2').removeClass('animated ' + animation);
	// 		$(selector + ' .section-description').removeClass('animated ' + animation);
	// 	});
	// }

	// headingAndDescrAnimation('.portfolio', 'slideInDown');
	// headingAndDescrAnimation('.team', 'slideInDown');
	// headingAndDescrAnimation('.contact', 'slideInDown');

	// Add hover effects

	$('.portfolio-item').addClass('hvr-outline-in');
	$('.promo-btn-outer').addClass('hvr-sink');

});
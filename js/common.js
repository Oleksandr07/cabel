$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		margin: 10,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();

	$('input[type="tel"]').mask("+7 (999) 999-99-99");

	$('.menu-bar').click(function(event) {
		$('.top-menu').slideToggle(300);
	});
	$(window).resize(function(event) {
		if ($(window).width() > 960) {
			$('.top-menu').show();
		}
		else{
			$('.top-menu').hide();
		}
	});

	$('.tab-box').click(function(event) {
		if (!$(this).hasClass('active')) {
			$('.tab-box').removeClass('active')
			$(this).addClass('active');
			$('.scope-box').removeClass('active');
			$('.scope-box[data-title="' + $(this).attr('data-title') + '"]').addClass('active');
		} 
	});

});
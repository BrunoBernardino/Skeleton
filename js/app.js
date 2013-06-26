(function( $, _, conditionizr ) {
	conditionizr({
		debug      : false,
		scriptSrc  : 'js/conditionizr/',
		styleSrc   : 'css/conditionizr/',
		ieLessThan : {
			active: true,
			version: '9',
			scripts: false,
			styles: false,
			classes: true,
			customScript:
				'//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js, //cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js'
			},
		chrome     : { scripts: false, styles: false, classes: true, customScript: false },
		safari     : { scripts: false, styles: false, classes: true, customScript: false },
		opera      : { scripts: false, styles: false, classes: true, customScript: false },
		firefox    : { scripts: false, styles: false, classes: true, customScript: false },
		ie10       : { scripts: false, styles: false, classes: true, customScript: false },
		ie9        : { scripts: false, styles: false, classes: true, customScript: false },
		ie8        : { scripts: false, styles: false, classes: true, customScript: false },
		ie7        : { scripts: false, styles: false, classes: true, customScript: false },
		ie6        : { scripts: false, styles: false, classes: true, customScript: false },
		retina     : { scripts: false, styles: false, classes: true, customScript: false },
		touch      : { scripts: false, styles: false, classes: true, customScript: false },
		mac        : true,
		win        : true,
		x11        : true,
		linux      : true
	});

	$(document).ready( function() {
		$('.container').on( 'click.app', 'a.button', function() {
			alert( 'Clicked' );
		});

		$('.container').on( 'submit.app', 'form', function( event ) {
			event.preventDefault();

			alert( 'Submitted' );
		});
	});
})( jQuery, _, conditionizr );
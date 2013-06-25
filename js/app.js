(function( $, _ ) {
	$(document).ready( function() {
		$('.container').on( 'click.app', 'a.button', function() {
			alert( 'Clicked' );
		});

		$('.container').on( 'submit.app', 'form', function( event ) {
			event.preventDefault();

			alert( 'Submitted' );
		});

		// Retina support
		if ( window.devicePixelRatio !== undefined && window.devicePixelRatio > 1 ) {
			$('img').each( function( index, element ) {
				if ( ! $(element).attr('src') ) {
					return false;
				}

				if ( $(element).hasClass('no-retina') ) {
					return false;
				}

				var newImageSRC = $(element).attr( 'src' ).replace( /(.+)(\.\w{3,4})$/, "$1@2x$2" );

				$.ajax({
					url: newImageSRC,
					type: "HEAD",
					success: function() {
						$(element).attr( 'src', newImageSRC );
					}
				});
			});

			$('html').addClass( 'retina' );
		}
	});
})( jQuery, _ );
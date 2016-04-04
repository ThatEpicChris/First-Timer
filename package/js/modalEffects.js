/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

var ModalEffects = (function FirstTime() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) );
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();


	var firsttimercount = Cookies.get('firsttimeview');

	window.onload = function() {
		if (firsttimercount == 0) {
	    document.querySelector('.md-trigger').click();
			console.log('First View opened, setting to viewed')
			Cookies.set('firsttimeview', '1');
		} else {
			console.log('First View already viewed, no change');
		};
	}

})();

$('.btnNext').click(function(){
 $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

 $('.btnPrevious').click(function(){
 $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});

$('.btnFirst').click(function(){
	$('.nav-tabs a:first').tab('show')
});

// FirstTimeViewed Cookie - 0 = Unviewed, will display on load. 1 = Viewed, will only display if triggered manually.

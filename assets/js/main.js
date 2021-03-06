/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	"use strict";

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// // Disable animations/transitions until the page has loaded.
		// 	$body.addClass('is-loading');
		//
		// 	$window.on('load', function() {
		// 		window.setTimeout(function() {
		// 			$body.removeClass('is-loading');
		// 		}, 100);
		// 	});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

		// Menu.
			var $menu = $('#menu');

			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();

					// Hide.
						$menu._hide();

				})
				.find('.inner')
					.on('click', '.close', function(event) {

						event.preventDefault();
						event.stopPropagation();
						event.stopImmediatePropagation();

						// Hide.
							$menu._hide();

					})
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('click', 'a', function(event) {

						var href = $(this).attr('href');

						event.preventDefault();
						event.stopPropagation();

						// Hide.
							$menu._hide();

						// Redirect.
							window.setTimeout(function() {
								window.location.href = href;
							}, 350);

					});

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

	});

  var offset = -10;
  var time = 500;
	// クリック時にスクロール
	$('a[href^=#]').click(function() {
		var target = $(this.hash);
		console.log(target)
		if (!target.length) return;
		var targetY = target.offset().top + offsetY;
		$('html,body').animate({
			scrollTop: targetY
		}, time, 'swing')
		window.history.pushState(null, null, this.hash);
		return false;
	})

	// Google Mapsの設定
	function initGmap() {
		var latlng = new google.maps.LatLng(35.1879723,136.9437694);
		var options = {
			zoom: 15,
			center: latlng,
			mapTypeControl: false,
			streetViewControl: false,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map($('#gmap').get(0), options);
		var style = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}];
		var styleType = new google.maps.StyledMapType(style, { name: 'OthloHack' });
		map.mapTypes.set('OthloHack', styleType);
		map.setMapTypeId('OthloHack');

		var icon = new google.maps.MarkerImage('../../images/marker.png',
			new google.maps.Size(48, 48),
			new google.maps.Point(0, 0)
		);
		var markerOpts = {
			position: latlng,
			map: map,
			icon: icon,
			title: 'OthloHack 会場'
		};
		var marker = new google.maps.Marker(markerOpts);

		mapSizeInit();
	}

	function mapSizeInit() {
		var width = $('#gmap').width();
		var margin = ($(window).width() - width) / 2;
		$('#gmap').css('width', $(window).width()).css('right', margin);
	}

	function sizeInit() {
		var width = $('.venues').width();
		var margin = ($(window).width() - width) / 2;
		$('.venues').css('width', $(window).width()).css('right', margin);
	}

	initGmap();
	sizeInit();

})(jQuery);
$(document).ready(function(){	
	$("header > .menu-button").click(function(){
	    $("header").toggleClass("open");
	});
});


$(function() {
	
	$(document).ready(function(){
	
		// Open overlay
		$(".overlay > .close-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
		
		// Close overlay
		$("#open-overlay").click(function(){
		    $(".overlay").toggleClass("visible");
		});
		
		$("body > header > div > .menu-button").click(function(){
		    $("body > header > div > nav").toggleClass("visible");
		});
		
		mixpanel.track('Viewed', {
	//	    'page name' : document.title,
		    'url' : window.location.pathname
		});
		
		
	});
	
	
	// Find all YouTube videos
	var $allVideos = $("iframe[src^='https://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $(".video-wrapper");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});
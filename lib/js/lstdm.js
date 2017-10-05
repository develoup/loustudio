$(function(){

		// update_url
		update_url(crrntprj);

		// maximage & cycle
		$('#maximage').maximage({
					cycleOptions: {
						fx: 'fade',
						speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
						timeout: 0,
						prev: '#arrow_left',
						next: '#arrow_right',
						pause: 1,
						startingSlide: crrntprj,
						before: function(last,current){
							if(!$.browser.msie){
								// Start HTML5 video when you arrive
								if($(current).find('video').length > 0) $(current).find('video')[0].play();
							}
						},
						after: function(last,current){
							if(!$.browser.msie){
								// Pauses HTML5 video when you leave it
								if($(last).find('video').length > 0) $(last).find('video')[0].pause();
							}
						}
					},
					onFirstImageLoaded: function(){
						jQuery('#cycle-loader').hide();
						jQuery('#maximage').fadeIn('fast');
					}
		});
	
		// Helper function to Fill and Center the HTML5 Video
		jQuery('video,object').maximage('maxcover');
	
		// To show it is dynamic html text
		jQuery('.in-slide-content').delay(600).fadeIn(600);

		// menu events
		$( "#open_menu" ).bind( "click", openmenu );
		$( "#close_menu" ).bind( "click", closemenu );
		function openmenu( event ){
		    $( "#open_menu" ).hide();
		    $( "#close_menu" ).show();
		    $( "#bg_menu" ).css({"left":"100%"});
		    $( "#bg_menu" ).show();
		    $( "#bg_menu" ).animate({left:"0px"}, 200, function(){ console.log('openmenu'); });
		}
		function closemenu( event ){
		    $( "#close_menu" ).hide();
		    $( "#bg_menu" ).animate({left:"100%"}, 200, function(){ $("#bg_menu").hide();$( "#open_menu" ).show(); })
		}

		// work
		$( ".work" ).bind( "click", openprj );
		$( "#close_prj" ).bind( "click", closeprj );
		function openprj( event ){
			var prnt = $(event.target).parent();
			var prntid = prnt.attr('id');
			$( "#info-work-title" ).html(prjcts[prntid]);
			$( ".work" ).css({"margin-top":"125px"});
			$( "#info-work" ).show();
			$( "#close_prj" ).show();
		}
		function closeprj( event ){
		    $( "#close_prj" ).hide();
			$( "#info-work-content" ).html("");
			$( "#info-work" ).hide();
		}


		// swipe
		//$('#car').on( "swipe", swipeHandler );
		function swipeHandler( event ){
		    console.log('swipeHandler');
		}
});
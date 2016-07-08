// --------------------------------------------------
// APP.JS
// --------------------------------------------------



//
// Initialize Foundation
// --------------------------------------------------


$(document).foundation();

//
// Custom JS
// --------------------------------------------------

$(document).ready(function(){
	
	var $images = $('.draggable');
	
	$images.draggable();

	$.each($images, function(){
		var x = Math.max(0, Math.min(75, Math.ceil(Math.random() * 100)));
		var y = Math.max(0, Math.min(75, Math.ceil(Math.random() * 100)));
		$(this).draggable();
		$(this).css({
		    position: 'absolute',
		    top: y + '%',
		    left: x + '%'
		});
	});

	$(function(){
		var ink, d, x, y;
		$(".ripplelink").dblclick(function(e){
    		if($(this).find(".ink").length === 0){
        		$(this).prepend("<span class='ink'></span>");
    		}
         	ink = $(this).find(".ink");
    		ink.removeClass("animate");
     
    		if(!ink.height() && !ink.width()){
        		d = Math.max($(this).outerWidth(), $(this).outerHeight());
        		ink.css({height: d, width: d});
    		}
     
    		x = e.pageX - $(this).offset().left - ink.width()/2;
    		y = e.pageY - $(this).offset().top - ink.height()/2;
     
    		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
		});
	});
});

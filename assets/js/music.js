$(document).ready(function () {
    function play_sound($sound_id) {
        $($sound_id).trigger("play");
        $($sound_id)[0].currentTime = 0;
    }

    $("td").on("click", function () {
        $this_id = $(this).attr('id');
        $pass_id = "#" + $this_id.split("_")[0];
        play_sound($pass_id);
    });

	/*Click function for my facebook link*/
	$('#rib').click(function(){
		window.location.assign("https://www.facebook.com/ars.shovon")
	});
  // Tooltip only Text
    $('#rib , #showplaygame, #player1name').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
		if(title!=""){
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
    }}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
    	var s=$(this).attr('id');
    	if(s=="rib"){
            var mousex = e.pageX -140; //Get X coordinates
            var mousey = e.pageY+35; //Get Y coordinates
        }
        else
        {
            var mousex = e.pageX -65; //Get X coordinates
            var mousey = e.pageY+22; //Get Y coordinates            	
        }
            $('.tooltip')
            .css({ top: mousey, left: mousex })
			
    });

    
});
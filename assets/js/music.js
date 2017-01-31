$(document).ready(function () {
    function play_sound($sound_id) {
		$("td").removeClass('drum_pad_hover');
        $($sound_id).trigger("play");
        $($sound_id)[0].currentTime = 0;
		$element_name = $sound_id+"_pad";
		$($element_name).addClass("drum_pad_hover");
		window.setTimeout(function() {
			$($element_name).removeClass('drum_pad_hover');			
		}, 300);		
    }
	var sound_ar = [];
	sound_ar["a"] = "cymbal1";
	sound_ar["s"] = "tom1";
	sound_ar["d"] = "tom2";
	sound_ar["f"] = "cymbal2";
	
	sound_ar["j"] = "bass";
	sound_ar["k"] = "snare";
	sound_ar["l"] = "hihat1";
	sound_ar[";"] = "hihat2";
		
	$(window).keypress(function(e){
		e = e || window.event;
		var key = e.keyCode || e.which;
		key = String.fromCharCode(key);
		key_lower = key.toLowerCase();
		
		if (key_lower in sound_ar){
			$pass_id = "#" + sound_ar[key_lower];
			play_sound($pass_id);			
		}
	});

    $("td").on("click", function () {
        $this_id = $(this).attr('id');
        $pass_id = "#" + $this_id.split("_")[0];
        play_sound($pass_id);
    });    
});
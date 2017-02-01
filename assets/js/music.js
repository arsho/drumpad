$(document).ready(function () {
	var sound_ar = [];
	sound_ar["a"] = "cymbal1";
	sound_ar["s"] = "tom1";
	sound_ar["d"] = "tom2";
	sound_ar["f"] = "cymbal2";
	
	sound_ar["j"] = "bass";
	sound_ar["k"] = "snare";
	sound_ar["l"] = "hihat1";
	sound_ar[";"] = "hihat2";

	$all_music = {};

	$all_music["two_and_four"] = [
		["hihat2","bass"],
		["hihat2","snare"],
		["hihat2","bass"],
		["hihat2","snare"]
	];
	
	$all_music["four_on_the_floor"] = [
		["hihat2","bass"],
		["hihat2","snare","bass"],
		["hihat2","bass"],
		["hihat2","snare","bass"]
	];	

	$all_music["one_drop"] = [
		["hihat2","bass"],
		["hihat2"],
		["hihat2","snare"],
		["hihat2"],
		["hihat2"],
		["hihat2","snare","bass"],
		["hihat2"],
		["hihat2"]
	];	

	$all_music["boom_boom_clap"] = [
		["hihat2","bass"],
		["hihat2","bass"],
		["hihat2","snare"],
		["hihat2","bass"],
		["hihat2","bass"],
		["hihat2","snare"]
	];	

    function play_sound($sound_id) {
        $($sound_id).trigger("play");
        $($sound_id)[0].currentTime = 0;
		$element_name = $sound_id+"_pad";
		$($element_name).addClass("drum_pad_hover");
		window.setTimeout(function() {
			$("td").removeClass('drum_pad_hover');
		}, 300);
    }

	function play_sound_ar($passed_sound_ar) {
		for(var i=0;i<$passed_sound_ar.length;i++){
			$sound_id = "#"+$passed_sound_ar[i];
			play_sound($sound_id);
		}
    }

	function play_rhythm($music_sheet){
		$music_sheet = $all_music[$music_sheet];
		for(var i=0;i<$music_sheet.length;i++){
			(function(i){
				setTimeout(function(){
					$current_ar = $music_sheet[i];
					play_sound_ar($current_ar);
				}, 600 * i);
			}(i));						
		}
	}
		
	$(window).keypress(function(e){
		e = e || window.event;
		var key = e.keyCode || e.which;
		key = String.fromCharCode(key);
		key_lower = key.toLowerCase();
		
		if (key_lower == "1"){
			play_rhythm("two_and_four");
		}
		else if(key_lower == "2"){
			play_rhythm("four_on_the_floor");
		}
		else if(key_lower == "3"){
			play_rhythm("one_drop");
		}
		else if(key_lower == "4"){
			play_rhythm("boom_boom_clap");
		}
		else if (key_lower in sound_ar){
			$pass_id = "#" + sound_ar[key_lower];
			play_sound($pass_id);			
		}
	});
		
    $(".drum_pad").on("click", function () {
		$this_id = $(this).attr('id');
        $pass_id = "#" + $this_id.split("_")[0];
        play_sound($pass_id);
    });

    $(".lesson").on("click", function () {
		$this_id = $(this).attr('id');
        play_rhythm($this_id);
    });        
});
//http://takelessons.com/blog/easy-drum-beats-z07
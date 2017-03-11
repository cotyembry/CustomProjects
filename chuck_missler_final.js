javascript:
		elementToPlay=0;___actual_values_to_compare___ = [];if(typeof(Storage)!=="undefined") {
		if(typeof(sessionStorage.accessedToday)=="undefined") {
			if(typeof(localStorage.playHere)=="undefined") {
			localStorage.playHere=0;
			}
			sessionStorage.accessedToday=true;
		} 
		else {
			___audio_position___=document.getElementsByClassName("jwtext jwelapsed jwhidden");
			//___audio_position___ has all of the play elements
			//iterate through each item of the array and get the different timing on the array
			for(i = 0; i < ___audio_position___.length; i++) {
				if(/\d\d\:/.test(___audio_position___[i].innerHTML)) {
					left_side=Number(___audio_position___[i].innerHTML.slice(0,2));
					right_side=Number(___audio_position___[i].innerHTML.slice(3,4));
					___actual_values_to_compare___.push(60*left_side+right_side);
				} 
				else {
					left_side=Number(___audio_position___[i].innerHTML.slice(0,1));
					right_side=Number(___audio_position___[i].innerHTML.slice(2,3));
					___actual_values_to_compare___.push(60*left_side+right_side);
				}
				
			}
			//once I've gotten the element with the longest playback, get it in the correct format to be able to play it below
			//get the longest playback time
			playHereVariable=0;

			for(i=0; i < ___audio_position___.length; i++) {
				if(___actual_values_to_compare___[i] > playHereVariable) {
					playHereVariable = ___actual_values_to_compare___[i];
					elementToPlay=i;
				}
			}	
			//after I've gotten the element with the number to play at i can do this	
			localStorage.playHere=playHereVariable
		}
	} 
	else {
		alert("localStorage is not supported");
	}
	//this part gets me the element to play the audio on
   _match1=document.documentElement.innerHTML.match(/jwplayer\(.*\.setup.*file:/gi);
   newArray=_match1[elementToPlay].search(/\"/g);
   newArray=_match1[elementToPlay].slice(newArray+1);
   _match1=newArray.search(/\"/);
   _match1=newArray.slice(0,_match1);
	jwplayer(_match1).seek(localStorage.playHere);
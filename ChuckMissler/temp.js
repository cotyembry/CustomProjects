javascript:
elementToPlay=0;___actual_values_to_compare___=[];
if(typeof(Storage)!=="undefined"){
	if(typeof(sessionStorage.accessedToday)=="undefined"){
		if(typeof(localStorage.playHere)=="undefined"){
			localStorage.playHere=0;
			if(typeof(localStorage.elementToPlay)=="undefined"){
				localStorage.elementToPlay="undefined";
			}
		}
		sessionStorage.accessedToday=true;
	}
	else{
		//audio_position has all of the play elements
		___audio_position___=document.getElementsByClassName("jwtext%20jwelapsed%20jwhidden");
		for(i=0;i<___audio_position___.length;i++){
			if(/\d\d\:/.test(___audio_position___[i].innerHTML)){left_side=Number(___audio_position___[i].innerHTML.slice(0,2));
				right_side=Number(___audio_position___[i].innerHTML.slice(3,4));___actual_values_to_compare___.push(60*left_side+right_side);
			}
			else{
				left_side=Number(___audio_position___[i].innerHTML.slice(0,1));right_side=Number(___audio_position___[i].innerHTML.slice(2,3));
				___actual_values_to_compare___.push(60*left_side+right_side);
			}
		}
		playHereVariable=0;
		//now get the longest playing element
		for(i=0;i<___audio_position___.length;i++){
			if(___actual_values_to_compare___[i]>playHereVariable){
				playHereVariable=___actual_values_to_compare___[i];
				//elementToPlay lets me save the actual id of the file to play next time(Ill persist this data)
				localStorage.elementToPlayNumber=i;
				alert(elementToPlay);
			}
		}
			localStorage.playHere=playHereVariable

	}
}
else{
	alert("localStorageisnotsupported");
}
	_match1=document.documentElement.innerHTML.match(/jwplayer\(.*\.setup.*file:/gi);
		___length=_match1.length;
		newArray=_match1[localStorage.elementToPlayNumber].search(/\"/g);
		newArray=_match1[localStorage.elementToPlayNumber].slice(newArray+1);
		_match1=newArray.search(/\"/);_match1=newArray.slice(0,_match1);

		localStorage.elementToPlay=_match1;
		if(typeof(localStorage.elementToPlay)!="undefined"){
			jwplayer(localStorage.elementToPlay).seek(localStorage.playHere);
		}
		alert(___length);
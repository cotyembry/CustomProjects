/* this is a resource document, not fully functional as a standalone file, but the bottom line works standalone as a bookmarklet on the following website http://6640.khouse.org/resources/radio/6640/archive but only for the first audio clip */

/* these only account for the first occurrance of the string, NOT the full all 6 occurrances... ill have to finish this later */
/* two things left to do: store the time when exiting the browser the video is playing on, and make it where it searches and compares among all .mp3 files on the page and not just the first occurrance */

/* this will get the first occurrance of the full .mp3 urls */
javascript:_match1=document.documentElement.innerHTML.search(/file:/i);_match2=document.documentElement.innerHTML.search(/http:\/\/cdn.khouse.org\/publicpodcast\/6640_mp3\/992743341\/1120_66-40 C0163_ Chuck Missler _Genesis 28-31.mp3/i);mynewvar=document.documentElement.innerHTML.slice(_match1+7);_match1=mynewvar.search(/.mp3/i);mynewvar=mynewvar.slice(0,_match1+4);alert(mynewvar);


/* this section will get out the element id of the first occurrance to be able to control the seek() method */
javascript:_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);mynewvar=document.documentElement.innerHTML.slice(_match1+10);_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);_match1=mynewvar.search(/\).setup/i);mynewvar=mynewvar.slice(0,_match1-1);


/* this is the part that actually moves the jwplayer to where I want it to be */
javascript:mynewestvar=document.cookie;jwplayer(mynewvar).seek(0);alert(mynewestvar);


/* this part gives me the time where the audio is for each file (so it returns it he form of an array) which I will use to add to the cookies */
/* !!!! I can't use cookies to do this since the array value doesn't interpolate so I need to look up "local web storage" or something like that */
javascript:___audio_position___=document.getElementsByClassName("jwtext jwelapsed jwhidden");


/*####### here is everything neatly formatted....besides some functions.... #######*/
/* now to either play the file or save the file, but first make sure there is support */
if(typeof(Storage)!=="undefined"){
	if(typeof(sessionStorage.accessedToday)=="undefined"){
		if(typeof(localStorage.playHere)=="undefined"){
			localStorage.playHere=0;
		}
		sessionStorage.accessedToday=true;
	}
	else{
		/* now it is getting here the next time it comes to this page */
		___audio_position___=document.getElementsByClassName("jwtext jwelapsed jwhidden");
		if(/\d\d\:/.test(___audio_position___[0].innerHTML)) { /* make sure these statements are correct */
			left_side=___audio_position___[0].innerHTML.slice(0,2);
			right_side=___audio_position___[0].innerHTML.slice(3,4);
		}
		else{
			left_side=___audio_position___[0].innerHTML.slice(0,1);
			right_side=___audio_position___[0].innerHTML.slice(2,3);
		}
		localStorage.playHere=(left_side*60+right_side);
	}
}
else{
	alert("localStorage is not supported");
}
_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);mynewvar=document.documentElement.innerHTML.slice(_match1+10);_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);_match1=mynewvar.search(/\).setup/i);mynewvar=mynewvar.slice(0,_match1-1);
jwplayer(mynewvar).seek(localStorage.playHere);
/*###########################################*/

/* this next line works! almost perfect... but need to make it if the session has already happened to not disrupt the current video progression */
javascript:if(typeof(Storage)!=="undefined"){if(typeof(sessionStorage.accessedToday)=="undefined"){if(typeof(localStorage.playHere)=="undefined"){localStorage.playHere=0;}sessionStorage.accessedToday=true;}else{___audio_position___=document.getElementsByClassName("jwtext jwelapsed jwhidden");if(/\d\d\:/.test(___audio_position___[0].innerHTML)){left_side=___audio_position___[0].innerHTML.slice(0,2);right_side=___audio_position___[0].innerHTML.slice(3,4);}else{left_side=___audio_position___[0].innerHTML.slice(0,1);right_side=___audio_position___[0].innerHTML.slice(2,3);}localStorage.playHere=(Number(left_side)*60+Number(right_side));}}else{alert("localStorage is not supported");}_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);mynewvar=document.documentElement.innerHTML.slice(_match1+10);_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);_match1=mynewvar.search(/\).setup/i);mynewvar=mynewvar.slice(0,_match1-1);jwplayer(mynewvar).seek(localStorage.playHere);


//########## now to make the above line of code that works neatly formatted so it can be expanded in the future
javascript:if(typeof(Storage)!=="undefined") {
	if(typeof(sessionStorage.accessedToday)=="undefined") {
		if(typeof(localStorage.playHere)=="undefined") {
			localStorage.playHere=0;
		}
		sessionStorage.accessedToday=true;
		} 
		else {
			___audio_position___=document.getElementsByClassName("jwtext jwelapsed jwhidden");
			if(/\d\d\:/.test(___audio_position___[0].innerHTML)) {
				left_side=___audio_position___[0].innerHTML.slice(0,2);
				right_side=___audio_position___[0].innerHTML.slice(3,4);
			} 
			else {
				left_side=___audio_position___[0].innerHTML.slice(0,1);
				right_side=___audio_position___[0].innerHTML.slice(2,3);
			}
			localStorage.playHere=(Number(left_side)*60+Number(right_side));
		}
	} 
	else {
		alert("localStorage is not supported");
	}
	_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);
	mynewvar=document.documentElement.innerHTML.slice(_match1+10);
	_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);
	_match1=mynewvar.search(/\).setup/i);
	mynewvar=mynewvar.slice(0,_match1-1);
	jwplayer(mynewvar).seek(localStorage.playHere);

//##### end here ######


//now to make the above code better:
//I need to look at each array iteration and play the one that has played the longest
javascript:if(typeof(Storage)!=="undefined") {
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
			for(int i = 0; i < ___audio_position___.length; i++) {
				___audio_comparision_array___ = [];
				___actual_values_to_compare___ = [];
				if(/\d\d\:/.test(___audio_position___[i].innerHTML)) {
					left_side=___audio_position___[i].innerHTML.slice(0,2);
					right_side=___audio_position___[i].innerHTML.slice(3,4);
					___audio_comparision_array___.push(left_side,right_side);
					___actual_values_to_compare___.push(60*left_side+right_side);
				} 
				else {
					left_side=___audio_position___[i].innerHTML.slice(0,1);
					right_side=___audio_position___[i].innerHTML.slice(2,3);
					___audio_comparision_array___.push(left_side,right_side);
					___actual_values_to_compare___.push(60*left_side+right_side)
				}
			}
			//once I've gotten the element with the longest playback, get it in the correct format to be able to play it below
			//get the longest playback time
			playHereVariable=0;
			for(int i=0; i < ___actual_values_to_compare___[i]; i++) {
				if(___actual_values_to_compare___[i] > playHereVariable) {
					playHereVariable=___audio_position___[i];
					arrayNumberToCompareLater=i;
				}
			}	
			//after I've gotten the element with the number to play at i can do this	
			localStorage.playHere=playHereVariable
		}
	} 
	else {
		alert("localStorage is not supported");
	}
	_match1=document.documentElement.innerHTML.match(/jwplayer\(.*\.setup.*file:/gi);
	//now take the element number that was the for the longest time
	//and pair it with the element number that is found above
	//then format the element to be able to play it
	newArray=_match1[arrayNumberToCompareLater].split("");
	finalArray=newArray[1].split("");
	mynewvar=document.documentElement.innerHTML.slice(_match1+10);
	_match1=document.documentElement.innerHTML.search(/jwplayer\(.*\.setup.*file:/i);
	_match1=mynewvar.search(/\).setup/i);
	mynewvar=mynewvar.slice(0,_match1-1); //finally, this gives me the element to seek to
	jwplayer(mynewvar).seek(localStorage.playHere);

//end

//################
//################
javascript:if(typeof(Storage)!=="undefined") {
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
			for(int i = 0; i < ___audio_position___.length; i++) {
				___audio_comparision_array___ = [];
				___actual_values_to_compare___ = [];
				if(/\d\d\:/.test(___audio_position___[i].innerHTML)) {
					left_side=___audio_position___[i].innerHTML.slice(0,2);
					right_side=___audio_position___[i].innerHTML.slice(3,4);
					___audio_comparision_array___.push(left_side,right_side);
					___actual_values_to_compare___.push(60*left_side+right_side);
				} 
				else {
					left_side=___audio_position___[i].innerHTML.slice(0,1);
					right_side=___audio_position___[i].innerHTML.slice(2,3);
					___audio_comparision_array___.push(left_side,right_side);
					___actual_values_to_compare___.push(60*left_side+right_side)
				}
				
			}
			//once I've gotten the element with the longest playback, get it in the correct format to be able to play it below
			//get the longest playback time
			playHereVariable=0;
			for(int i=0; i < ___audio_position___.length; i++) {
				if(___actual_values_to_compare___[i] > playHereVariable) {
					playHereVariable=___audio_position___[i];
					arrayNumberToCompareLater=i;
				}
			}	
			//after I've gotten the element with the number to play at i can do this	
			localStorage.playHere=playHereVariable
		}
	} 
	else {
		alert("localStorage is not supported");
	}
	_match1=document.documentElement.innerHTML.match(/jwplayer\(.*\.setup.*file:/gi);
	//now take the element number that was the for the longest time
	//and pair it with the element number that is found above
	//then format the element to be able to play it
	newArray=_match1[arrayNumberToCompareLater].split("");
	finalElement=newArray[1].split("");
	jwplayer(finalElement).seek(localStorage.playHere);

//######
//######

javascript:if(typeof(Storage)!=="undefined"){if(typeof(sessionStorage.accessedToday)=="undefined"){if(typeof(localStorage.playHere)=="undefined"){localStorage.playHere=0;}sessionStorage.accessedToday=true;}else{___audio_position___=document.getElementsByClassName("jwtext jwelapsed jwhidden");for(i=0;i<___audio_position___.length;i++){___audio_comparision_array___=[];___actual_values_to_compare___=[];if(/\d\d\:/.test(___audio_position___[i].innerHTML)){left_side=___audio_position___[i].innerHTML.slice(0,2);right_side=___audio_position___[i].innerHTML.slice(3,4);___audio_comparision_array___.push(left_side,right_side);___actual_values_to_compare___.push(60*left_side+right_side);}else{left_side=___audio_position___[i].innerHTML.slice(0,1);right_side=___audio_position___[i].innerHTML.slice(2,3);___audio_comparision_array___.push(left_side,right_side);___actual_values_to_compare___.push(60*left_side+right_side)}}playHereVariable=0;for(i=0;i<___audio_position___.length;i++){if(___actual_values_to_compare___[i]>playHereVariable){playHereVariable=___audio_position___[i];arrayNumberToCompareLater=i;}}localStorage.playHere=playHereVariable;}}else{alert("localStorage is not supported");}_match1=document.documentElement.innerHTML.match(/jwplayer\(.*\.setup.*file:/gi);newArray=_match1[arrayNumberToCompareLater].split(");finalElement=newArray[1].split(");jwplayer(finalElement).seek(localStorage.playHere);


javascript:totalTimes=[];tempVar=0;if(typeof(Storage)!=="undefined"){if(typeof(sessionStorage.accessedToday)=="undefined"){if(typeof(localStorage.playHere)=="undefined"){localStorage.playHere=0;}sessionStorage.accessedToday=true;}else{___audio_position___=document.getElementsByClassName("jwtext jwelapsed jwhidden");for(i=0;i<___audio_position___.length;i++){___audio_comparision_array___=[];___actual_values_to_compare___=[];if(/\d\d\:/.test(___audio_position___[i].innerHTML)){left_side=___audio_position___[i].innerHTML.slice(0,2);right_side=___audio_position___[i].innerHTML.slice(3,5);tempVar_=left_side*60+right_side;totalTimes.push(tempVar);}else{left_side=___audio_position___[i].innerHTML.slice(0,1);right_side=___audio_position___[i].innerHTML.slice(2,3);tempVar_=left_side*60+right_side;totalTimes.push(tempVar);}}valueToAdd=60*left_side+right_side;playHereVariable=0;for(i=0;i<___audio_position___.length;i++){if(___actual_values_to_compare___[i]>playHereVariable){playHereVariable=___audio_position___[i];arrayNumberToCompareLater=i;}}localStorage.playHere=playHereVariable;}}else{alert("localStorage is not supported");}_match1=document.documentElement.innerHTML.match(/jwplayer\(.*\.setup.*file:/gi);


//this works and is [should be] the final version
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

//done	
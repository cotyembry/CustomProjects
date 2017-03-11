// This will add an element over the whole page and will wait for a click
// event. Once this happens it will show the x and y coordinates of where
// the mouse was clicked then remove the element that was added to the page
//___myDiv___ will surround the whole document to be able to capture any click
//events
//line 25 can be altered to get a specific element height and width to further
//expand this utility
//Note: the x,y values will be absolute positioning for the entire page
//(I think).... i haven't tested this theory by changing the element the
//width and height is based of of on line 25

javascript:
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27 && document.getElementById("___myDiv___") != undefined) {
        ___html_element___.removeChild(___myDiv___);
    }
};

//to make this work for any container, change the right side of this equals
//sign to the actual element that has the width and height properties
//needed to add the div element over
//You will also need to reposition the top, left, and right properties on the
//div element
___html_element___ = document.documentElement; //returns to root element of the document
if(document.getElementById("___myDiv___") == undefined) {
	___myDiv___ = document.createElement("div");
	___myDiv___.id = "___myDiv___";


	//now to set the width and height on the div element and the position
	
	___globalWidth= ___html_element___.offsetWidth+"px";

	___myDiv___.style.width = ___globalWidth;

	___globalHeight = ___html_element___.offsetHeight+"px";

	___myDiv___.style.height = ___globalHeight;

	___myDiv___.style.border = "solid black 4px";

	___myDiv___.style.position = "absolute";
	___myDiv___.zIndex="1000";
	___myDiv___.style.top="0";

	//then set the event listener
	___myDiv___.addEventListener("click", returnXandY);

	//now add the element to the html node
	___html_element___.appendChild(___myDiv___);

	function returnXandY(event) {
		___g_Xclicked=event.pageX;
		___g_Yclicked=event.pageY;
		alert((event.pageX-9)+","+(event.pageY-30));
	}

}
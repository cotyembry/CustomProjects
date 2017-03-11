//Author:John Coty Embry
//Date: 	10/15/15
//This will allow the user to click a point on the screen (a circle that has
//already been created with svg) and it will find the elements position in the
//DOM and will return do some stuff to eventually return the control points
//to be able to create a bezier curve for a graph that smooths out really
//well. This minifies the effort in getting the control points for a x,y
//coordinate


//Before using this calibrate the returnXandY "pageX" and "pageY" properties
//else there could be a problem with locating the circle element when
//clicking on the element

//TODO
//To make this better throw an error if it is a start point or end point selected
//Make it end the script if there isn't an element within the radius

// use case(s):
//		1. click a point/element on a page and return the control points for that point
//			-the element clicked will be a circle with x,y coordinates in svg
//			-the page will then alert() the two control point coordinates
//		2. hit enter on the keyboard to remove the function from the page

//	ASSUMPTIONS:
//		Let's assume that no two points fall on the same x coordinate
//		and for now no two points fall within a radius of 8px of eachother

//####### Start code #######

javascript: //this is necessary since this will be in the form of a bookmarklet

//first use helper returnXandY.js code (defined below) to get the coordinates that
//were clicked on (approximately anyways).
setupDivElement();

function divClicked() {
	console.log("inside divClicked");
	//once I have the coordinates search through the DOM to find any
	//circles that are within an 8px radius
	___circleElements=document.getElementsByTagName("circle");
	console.log(___circleElements[0].cx.baseVal.value+"<-");
	___g_matched=false;
	___g_circlesCoordArray=[];
	for(i=0;i<___circleElements.length;i++) {
		//while im here i might as well get these into a proper array
		___g_circlesCoordArray[i]=___circleElements[i];
		___g_compare = ___circleElements[i].cx.baseVal.value;
		//___g_compare=___g_circlesCoordArray[i].cx.baseVal.value;
		//match the circle that was clicked within a radius of 8px
		if(((___g_Xclicked <= ___g_compare + 8) && (___g_Xclicked >= ___g_compare - 8)) && ___g_matched != true) {
			___g_xValueThatMatchedCircleElementClicked=___circleElements[i].cx.baseVal.value;
			console.log(___g_xValueThatMatchedCircleElementClicked);
			console.log("found a match");
			console.log("x->"+___circleElements[i].cx.baseVal.value);
			console.log("y->"+___circleElements[i].cy.baseVal.value);
		}
	}

	//now sort the array to be able to get the points in the triangle that allow
	//the Spline Interpolation possible
	___g_circlesCoordArray.sort(function(a, b){return a.cx.baseVal.value-b.cx.baseVal.value});


//Everything works up to here

	//if there are multiple elements deal with this later
		//TODO

	//else... get the control points
	//	call function getControlPoints() and send it the the x,y coordinates
	//	to the circle just selected, the prior circles's x,y position that was 
	//	selected, and the very next circle's x,y coordinates along with the t constant value
	//	of choice (probably should be 0.33)
	___g_matched=false;
	for(i=0;___g_matched != true;i++) {
		___g_compare1 = ___g_circlesCoordArray[i].cx.baseVal.value;
		if(___g_compare1 == ___g_xValueThatMatchedCircleElementClicked) {
			console.log("it matched");
			___g_matched = true;
		}
	}
	//now the "i" variable should be able to reference the x value that was selected
	//which I can use to get the prior and the next point to send to getControlPoints()

//make sure this isnt an end point that was selected; if it is throw an error
//	TODO
console.log("i is->"+i);
i--;
console.log("[i]->"+___g_circlesCoordArray[i].cx.baseVal.value);
console.log("[i]->"+___g_circlesCoordArray[i].cy.baseVal.value);
console.log("now print all of the coordinates out in a row");

for(a=0;a<___g_circlesCoordArray.length;a++) {
	console.log("x"+___g_circlesCoordArray[a].cx.baseVal.value+"y"+___g_circlesCoordArray[a].cy.baseVal.value);
}



	___g_finalControlPoints = getControlPoints (
		___g_circlesCoordArray[i-1].cx.baseVal.value,
		___g_circlesCoordArray[i-1].cy.baseVal.value,
		___g_circlesCoordArray[i].cx.baseVal.value,
		___g_circlesCoordArray[i].cy.baseVal.value,
		___g_circlesCoordArray[i+1].cx.baseVal.value,
		___g_circlesCoordArray[i+1].cy.baseVal.value, 
		0.33 
	);
	//whether the point is the first or last point depends on how I use these
	//return values. For instance, on the ending/final point of the graph I would
	//probably want to use a quadratic curve since only one control point would 
	//be used for the final curve

	alert(___g_circlesCoordArray[i].cx.baseVal.value+"x"+___g_circlesCoordArray[i].cy.baseVal.value+"y"+"::controlpoints->"+___g_finalControlPoints+"ending@->"+___g_circlesCoordArray[i+1].cx.baseVal.value+"x"+___g_circlesCoordArray[i+1].cy.baseVal.value+"y");
}
//####### end control point section #######



//####### start get control point calculation section #######
//the authors comments are indented, mine are not
function getControlPoints(x0,y0,x1,y1,x2,y2,t){
	console.log(x0+","+y0+","+x1+","+y1+","+x2+","+y2);
//x0,y0 is the starting point of triangle
//x1,y1 is the mid point of triangle
//x2,y2 is the end point of triangle
//I will only use p1x,p1y for a quadratic curve
//For cubic I will need both points

    //  x0,y0,x1,y1 are the coordinates of the end (knot) pts of this segment
    //  x2,y2 is the next knot -- not connected here but needed to calculate p2
    //  p1 is the control point calculated here, from x1 back toward x0.
    //  p2 is the next control point, calculated here and returned to become the 
    //  next segment's p1.
    //  t is the 'tension' which controls how far the control points spread.
    
    //  Scaling factors: distances from this knot to the previous and following knots.
    ___g_d01=Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2));
    ___g_d12=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
   
    ___g_fa=t*___g_d01/(___g_d01+___g_d12);
    ___g_fb=t-___g_fa;
  
    ___g_p1x=x1+___g_fa*(x0-x2);
    ___g_p1y=y1+___g_fa*(y0-y2);

    ___g_p2x=x1-___g_fb*(x0-x2);
    ___g_p2y=y1-___g_fb*(y0-y2);  
    
    return [___g_p1x.toFixed(),___g_p1y.toFixed(),___g_p2x.toFixed(),___g_p2y.toFixed()]
}

//####### end control point calculation section #######



//###### starting helper returnXandY section #######
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
function setupDivElement() {
	console.log("setting up Div element");
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
		return "";
	}
}

function returnXandY(event) {
	___g_Xclicked=event.pageX-9;
	___g_Yclicked=event.pageY-30;
	divClicked();
}

//###### ending helper returnXandY section #######
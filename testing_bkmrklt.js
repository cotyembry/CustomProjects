javascript:setupDivElement();function divClicked(){console.log("insidedivClicked");___circleElements=document.getElementsByTagName("circle");___g_matched=false;___g_circlesCoordArray=[];for(i=0;i<___circleElements.length||___g_matched==true;i++){___g_circlesCoordArray[i]=___circleElements[i];if((___g_Xclicked<=Number(___g_circlesCoordArray[i].cx.baseVal.value)+8)&&(___g_Xclicked>=Number(___g_circlesCoordArray[i].cx.baseVal.value)-8)){___g_matched=true;___g_numberInArrayThatMatchedCircleElementClicked=i;console.log("foundamatch");}}___g_circlesCoordArray.sort(function (a,b){return a.cx.baseVal.value-b.cx.baseVal.value});console.log("got here");i=0;while(___g_circlesCoordArray[i].cx.baseVal.value!=___circleElements[___g_numberInArrayThatMatchedCircleElementClicked].cx.baseVal.value){i++;}___g_finalControlPoints=getControlPoints(___g_circlesCoordArray[i-1].cx.baseVal.value,___g_circlesCoordArray[i-1].cy.baseVal.value,___g_circlesCoordArray[i].cx.baseVal.value,___g_circlesCoordArray[i].cy.baseVal.value,___g_circlesCoordArray[i+1].cx.baseVal.value,___g_circlesCoordArray[i+1].cy.baseVal.value);alert(___g_finalControlPoints);}function getControlPoints(x0,y0,x1,y1,x2,y2,t){vard01=Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2));vard12=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));varfa=t*d01/(d01+d12);varfb=t-fa;varp1x=x1+fa*(x0-x2);varp1y=y1+fa*(y0-y2);varp2x=x1-fb*(x0-x2);varp2y=y1-fb*(y0-y2);return [p1x.toFixed(),p1y.toFixed(),p2x.toFixed(),p2y.toFixed()]}document.onkeydown=function (evt){evt=evt||window.event;if(evt.keyCode==27&&document.getElementById("___myDiv___")!=undefined){___html_element___.removeChild(___myDiv___);}};function setupDivElement(){console.log("settingupDivelement");___html_element___=document.documentElement;if(document.getElementById("___myDiv___")==undefined){___myDiv___=document.createElement("div");___myDiv___.id="___myDiv___";___globalWidth=___html_element___.offsetWidth+"px";___myDiv___.style.width=___globalWidth;___globalHeight=___html_element___.offsetHeight+"px";___myDiv___.style.height=___globalHeight;___myDiv___.style.border="solidblack4px";___myDiv___.style.position="absolute";___myDiv___.zIndex="1000";___myDiv___.style.top="0";___myDiv___.addEventListener("click",returnXandY);___html_element___.appendChild(___myDiv___);return "";}}function returnXandY(event){___g_Xclicked=event.pageX-9;___g_Yclicked=event.pageY-30;alert("returnXandYalert"+(event.pageX-9)+","+(event.pageY-30));divClicked();}
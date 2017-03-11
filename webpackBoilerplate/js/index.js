import React from 'react';
import ReactDOM from 'react-dom';



//import animationHelper from './animationHelper.js';

//import $ from './jquery-custom.js';


import Legend from './components/Legend.jsx';
import YLabel from './components/YLabel.jsx';


import svgBarGraphObject from './svgBarGraph.js';

//import Table from './components/Table.jsx';


(function ready() {
	

	var data = {
		//TODO: remove animation if there is only one bar
		//TODO: finish the .distributeRemainingSpace method to work on all of the elements
		yValues: [245, 2623, 681, 934, 103, 1152, 2401], //each value (element in the array) corresponds to one and only one bar within the bar graph
		legendData: ['bar 1', 'bar 2'],
		parentDivId: 'svgBarChart1Id',
		yLabelDivId: 'yLabel',
		legendDivId: 'legend',
		legendData: ['2','3','4','5','BLANK']
	};
	
	//alternate format
	//var data = {yValues:[245,2623,681,934,103,1152,2401],legendData:['bar 1','bar 2'],parentDivId:'svgBarChart1Id'};
	

	var graphNumber = svgBarGraphObject.createBarGraph(data);

	ReactDOM.render(<YLabel dataObject={data} graphNumber={graphNumber} />, document.getElementById(data.yLabelDivId));
	ReactDOM.render(<Legend dataObject={data} />, document.getElementById(data.legendDivId));
	//var tdArray = [[100, 200, 300], [400, 500, 600] ];
	//ReactDOM.render(<Table tdArray={tdArray} />, document.getElementById('table'));

})();
fs = require('fs')
fs.readFile('/Users/cotyembry/Developer/web-dev/web-dev-config.txt', 'utf8', function (err, text) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);

  //make these if else checks more sophisticated for better accuracy
  if(text.search(/\./gi) !== -1) {
  	//if here, the last /location in the path is a file
  }
  else {
  	//the last /directoryName was a directory
 	//todo look up how to execute bash system commands
  }







});
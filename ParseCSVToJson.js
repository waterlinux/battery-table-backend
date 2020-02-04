const Papa = require('papaparse');
const fs = require('fs');
const file = fs.createReadStream('data.csv');

var data;

Papa.parse(file, {
  header: false,
  delimiter: ",",
  dynamicTyping: true,
  complete: function(results) {
    console.log(results);
    data = results.data;
  }
});
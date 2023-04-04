var re = /(\w+)\s(\w+)/;
var string = "John Smith";

console.log(string);

var result = string.replace(re, '$2, $1, $1, $2');

console.log(result);
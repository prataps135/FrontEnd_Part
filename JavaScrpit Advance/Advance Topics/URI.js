"use strict";

var uri = "my test.asp?name=stale&car=saab";
var result = encodeURI(uri);

console.log(uri);
console.log(result);

var resultd = decodeURI(result);
console.log(resultd);

var a = "Hello world nice to see you again";

console.log(a.length);  // find the total length of length
console.log(a.indexOf("see"));
console.log(a.search("see"));
console.log(a.startsWith("Hello"));
console.log(a.endsWith("again"));
var b = a.replace("see","saw");
console.log(b);
var c = a.slice(10,20);
console.log(c);
var d = a.substring(20);
console.log(d);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a[12]);
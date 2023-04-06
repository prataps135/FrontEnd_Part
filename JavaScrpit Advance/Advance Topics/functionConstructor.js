"use strict";

var epic = () =>{
    console.log("Hello from epic");
}

var epic2 = new Function("x","y",
    "console.log(x*y);");

epic();
epic2(2,10);
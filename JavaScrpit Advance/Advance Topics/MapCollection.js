"use strict";

var map = new Map();
map.set(1,"Pratap");
map.set(2,"Anju");

console.log(map);
console.log(map.get(1));
console.log(map.get(2));
console.log(map.has("1"));

var map2= new Map(
    [
        ["k1","value1"],
        ["k2","value2"],
        ["k3","value3"]
    ]
);

console.log(map2);

for (let i of map2){
    console.log(i);
}

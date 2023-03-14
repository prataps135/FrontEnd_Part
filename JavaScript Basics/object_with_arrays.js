// Array of Array
var arr = [
    ["Laurance","David","Mike"],
    [1,2,3]
];
console.log(arr[0][1]);

// Array of Object
var myArray = [{
    name1 : "Laurance",
    name2 : "David",
    name3 : "Mike"
},{
    name1 : "Tina",
    name2 : "Dave",
    name3 : "John"
}
];
console.log(myArray[0].name2);

// Object of Array
var myObj = {
    set1 : [1,2,3],
    set2 : [4,5,6]
};
console.log(myObj.set1[2]);

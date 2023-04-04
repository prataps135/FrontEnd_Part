var var1 = 10;
var arr = [10,20,30,40,50];

console.log(arr[0]);
console.log(arr);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

var newArr = new Array(101);

for(let i =0; i<newArr.length;i++){
    newArr[i] = i*i;
}
newArr.push("End of Array");

for(let i =0; i<newArr.length;i++){
    console.log("Square of "+i+" = "+newArr[i]);
}

console.log(newArr.findIndex((x) => x == 9801));
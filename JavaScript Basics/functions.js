// Syntax
function myFun() {
    // to be execute
    // code here
    // return
}

function fun(a, b) {
    console.log(a);
    document.write("Hello " + b)
}

// calling function
fun("Hello from function", prompt("Your name"));

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

var ourFriends = ["Laurance","David","Mike"]
function toArray(arr, newItem){
    arr.push(newItem);
    console.log(arr);
    return "New item added";
}

// Anonymus function || self calling function
(function(){
    console.log("Hello from Anonyus function");
})();

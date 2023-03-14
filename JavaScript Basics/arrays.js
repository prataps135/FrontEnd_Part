var ourFriends = ["Mike","David","Laurance"];
ourFriends[ourFriends.length] = "New Item"; // Not much reliable
ourFriends.push("Next Item");   // Add item at last of the array
// ourFriends.pop(); // remove last item in array

var friend = ourFriends.toString(); // convert array to String
var j = 'Mike,David,Laurance,New Item,Next Item';
var h = j.split(',');   //convert to an array

delete h[1]; // to delete the item in an array

var newArray = ourFriends.slice(1,3);   // slice an array by starting and ending point

var a = [2,4,3,5,1];
console.log(a.indexOf(4));  // find the index of perticular item
a.reverse();    // reverse the whole array
Array.isArray(a);   // check wheather its an array or not
a.sort();   // to sort an array

console.log(ourFriends);
console.log(ourFriends[0]);
console.log(ourFriends[1]);
console.log(ourFriends[2]);
console.log(ourFriends[3]);
console.log(ourFriends[4]);

// 2D array
var array2 = [
    [1,2,3],
    [4,5,6]
];
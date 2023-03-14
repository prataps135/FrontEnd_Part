// while loop
// entry control loop

var ourFriends = { name1: "Laurance", name2: "David", name3: "Mike" };
var a = 1;
while (a <= 3) {
    console.log(ourFriends['name' + a]);
    a++;
}

// do while loop
// exit control loop

var b = 1;
do {
    console.log(ourFriends['name' + b]);
    b++;
} while (b <= 3);

// for loop
for (var c = 1; c <= 3; c++) {
    console.log(ourFriends['name' + c]);
}

for (a in ourFriends){
    console.log(ourFriends[a]);
}

var arr = [1,2,3,4,5];

for(i = 0; i< arr.length ; i++){
    console.log(arr[i]);
}

for(x of arr){
    console.log(x);
}
var person = {firstName: 'Pratap', lastName: 'Sisodia'};
// person.middleName = Singh; // this will work in console to add more key value pair
console.log(person);
document.write(person.firstName);
document.write(person.lastName);

var ourFriends = {name1 : "David", name2 : "Laurance", name3 : "Mike"};
var a = 1;

console.log(ourFriends[ 'name' + a++ ]);
console.log(ourFriends[ 'name' + a++ ]);
console.log(ourFriends[ 'name' + a++ ]);

// objects in object
var ourFriendsNew = {
    person1 : {
        name : "Laurance",
        age : 18,
        car : {carName : "Maruti 800", carValue : 25000}
    },
    person2 : {
        name : "David",
        age : 21,
        car : {carName : "Alto", carValue : 35000}
    },
    person3 : {
        name : "Mike",
        age : 24,
        car : {carName : "Verna", carValue : 145000}
    }
};

var b = 1;
console.log(ourFriendsNew[ 'person' + b++]);
console.log(ourFriendsNew[ 'person' + b++]);
console.log(ourFriendsNew[ 'person' + b++]);

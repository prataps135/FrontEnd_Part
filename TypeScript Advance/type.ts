type user = {
    name: string,
    age: number
}

const myData: user = {
    name: "Pratap",
    age: 24
}

const myUser = {};
(myUser as user).age=34;
(<user>myUser).name="John"

console.log(myData);
console.log(myUser);
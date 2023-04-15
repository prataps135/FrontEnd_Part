// import * as _ from "underscore";

// const users: { name: string, age: number }[] = [
//     {
//         name: "john",
//         age: 33
//     },
//     {
//         name: "steve",
//         age: 18
//     },
//     {
//         name: "kate",
//         age: 12
//     }
// ];

// const maxAge = _.max(users, user =>user.age);
// console.log(maxAge);

import * as fs from "fs";

// const file:Buffer = fs.readFileSync("./test.txt");
const file:string = fs.readFileSync("./test.txt","utf-8");
console.log(file);

const var1: number = 10;
const var2: boolean = true;
const var3: string = "Hello";

const age: number = 33;
const hexaDecimal: number = 0xa00f;
const binary: number = 0b0011;

const isAdmin: boolean = false;
const user: string = "John";
let message: string;
// console.log(user,message);

if (isAdmin){
    message = `Hello ${user}.`;
}
else{
    message = `${user} is not admin.`
}
console.log(message);


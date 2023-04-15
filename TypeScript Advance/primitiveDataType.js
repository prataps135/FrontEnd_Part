const var1 = 10;
const var2 = true;
const var3 = "Hello";
const age = 33;
const hexaDecimal = 0xa00f;
const binary = 0b0011;
const isAdmin = false;
const user = "John";
let message;
// console.log(user,message);
if (isAdmin) {
    message = `Hello ${user}.`;
}
else {
    message = `${user} is not admin.`;
}
console.log(message);

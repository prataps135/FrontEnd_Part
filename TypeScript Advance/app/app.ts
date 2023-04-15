import Hero2 from "./hero";

let batman = new Hero2("batman");
batman.age = 33;
batman.addPower("money");
batman.addPower("batarag");
console.log(batman.listPower());
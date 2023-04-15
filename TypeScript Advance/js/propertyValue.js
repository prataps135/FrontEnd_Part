const name1="Pratap";
const age = 24;

const person={
    name1:name1,
    age:age
};
// This is shortHand to property
const person2={
    name1,
    age
};
const {name1:firstName}=person2;
console.log(firstName);

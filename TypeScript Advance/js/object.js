const person={
    name:"Pratap",
    age:24,
    hobies:["Coding,Reading"]
};
const response ={
    count:10,
    data:[{
        name1:"Luke Walker",
        films:["Star1","Star2"]
    }]
};

const {count,data:[{name1,films}]} = response;
console.log(count,name1,films);
// const name = person.name;
const {name,age,hobies} = person;
//using alias
const{name:firstName}=person;
console.log(name,age,hobies);
console.log(firstName);


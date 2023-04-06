function myName(name){
    return {
        [name]:{
            message:`My name is ${name}`
        }
    };
}

console.log(myName("Pratap"));
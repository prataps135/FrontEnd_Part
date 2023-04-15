// function pickNumber(numbers:number[]):number{
//     const randomIndex = Math.floor(Math.random()*numbers.length);
//     return numbers[randomIndex];
// }

// const number1 =[...Array(13).keys()];
// const pickedNumber = pickNumber(number1);
// console.log(pickedNumber);

// function pickSuit(strings:string[]):string{
//     const randonSuit = Math.floor(Math.random()*strings.length);
//     return strings[randonSuit];
// }

// const strings = ['daimond','clubs','hearts','spades'];
// const pickedSuit = pickSuit(strings);
// console.log(pickedSuit);

//generic function 
function picker<T>(args:T[]):T{
    const randomIndex = Math.floor(Math.random()*args.length);
    return args[randomIndex];
}


const strings = ['daimond','clubs','hearts','spades'];
const pickedSuit = picker(strings);
const number1 =[...Array(13).keys()];
const pickedNumber = picker(number1);
console.log(`Your card is ${pickedNumber} of ${pickedSuit}`);


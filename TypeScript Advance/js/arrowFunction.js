const numbers = [1,2,3];
numbers.map(function(numbers){
    return console.log(numbers);
});

// If there is one argument no need to use parenthesis
// If these is one line of code no need to use curly braces
numbers.map(numbers => console.log(numbers));
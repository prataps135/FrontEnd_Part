function multiply(num, multiplier) {
    num = (num !== undefined) ? num : 0;
    multiplier = (multiplier !== undefined) ? multiplier : 0;
    return num * multiplier;
}

// In ES6 we can do default parameter
function multiplyNew(num=0, multiplier=0) {
    return num * multiplier;
}


console.log(
    multiply(),
    multiply(5),
    multiply(2, 10)
);

console.log(
    multiplyNew(),
    multiplyNew(5),
    multiplyNew(2, 10)
);

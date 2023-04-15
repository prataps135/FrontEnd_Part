function add(...numbers) {
    return numbers.reduce((acc, number) => acc + number);
}

console.log(
    add(1, 2, 3)
);
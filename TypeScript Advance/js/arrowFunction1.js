const quotient = {
    numbers: [1, 2, 3, 4, 5, 6, 7],
    results: [],
    divideFun: function (divisor) {
        let that = this;
        return this.numbers.map((divident) => {
            if (divident % divisor == 0) {
                return that.results.push(divident);
            }
        });
    }
};

quotient.divideFun(3);
console.log(quotient.results);
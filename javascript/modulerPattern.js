const CalculatorModule = (() => {
    let total = 0;

    function add(number) {
        total += number;
        return total;
    }

    function subtract(number) {
        total -= number;
        return total;
    }

    return {
        add,
        subtract
    };
})();

console.log(CalculatorModule.add(5)); // 5
console.log(CalculatorModule.subtract(2)); // 3

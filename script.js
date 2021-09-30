// calculator functions

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(array) {
    return array.length ?
        array.reduce((accumulator, nextItem) => accumulator * nextItem) :
        0;
};

const divide = function(a, b) {
    return (b !== 0) ? a / b : 'ERROR';
}


const power = function(a, b) {
    return Math.pow(a, b);
};


function operator(operator, number1, number2) {

    switch (operator) {
        case "+":
            add(number1, number2)
            break;
        case "-":
            substract(number1, number2)
            break;
        case "*":
            multiply(number1, number2)
            break;
        case "/":
            divide(number1, number2)
            break;

        default:
            break;
    }

}
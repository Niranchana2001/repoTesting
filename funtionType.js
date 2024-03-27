function add(num1, num2) {
    return num1 + num2;
}
function doPrint(value) {
    console.log("Result is ".concat(value));
}
var combineValue;
combineValue = add;
combineValue = doPrint;
console.log(combineValue(6, 6));

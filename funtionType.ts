function add(num1:number, num2:number):number{
    return num1+num2
}
function doPrint(value:number):void{
    console.log(`Result is ${value}`);
}

let combineValue:Function;
combineValue = add;
combineValue = doPrint
console.log(combineValue(6,6))
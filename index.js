/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
let sum;
let operator = process.argv[2];
const argumentInfo = process.argv

if(process.argv.length <= 2){
    return "No operation provided...";
};
if(operator !== "plus" || operator !==  "minus"){
    return `Invalid operation: ${operator}`
};
if(process.argv.length = 3){
    return "No numbers provided..."
};
if (operator === "plus"){
    for(let i = 3; i < argumentInfo.length; i++){  un
    let num = Number(argumentInfo[i]);
            sum += num         
    };
};
if (operator === "minus"){
    for(let i = 3; i < argumentInfo.length; i++){
    let num = Number(argumentInfo[i]);
            sum -= num         
    };
}; 

return sum;

}

console.log(calculator())

// Don't change anything blow this line.
module.exports = calculator;

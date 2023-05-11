/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // let operator = process.argv[2]
    let sum = 0;
    const [pathToNode, pathtoFile, operator, ...rest] = process.argv
    // console.log("The process array: ", process.argv)
    // console.log("Everything after the second index[2]:  ", rest)
    if (!operator) {
        return "No operation provided...";
    } else if (operator !== 'plus' && operator !== 'minus') {
        return "Invalid operation: modulo";
    };
    if (rest.length === 0) {
        return "No numbers provided...";
    };
    for (let i = 0; i < rest.length; i++) {
        // console.log(rest)
        if (operator === "plus") {
            sum += Number(rest[i]);
        } else if (operator === "minus") {
            return sum = rest.reduce((previousVal, currentVal) => Number(previousVal) - Number(currentVal))
        };
    };
    return sum;
}

calculator()
// console.log( "\n\n\n\n Look at the process.argv array: " , process.argv )

// Don't change anything below this line.
module.exports = calculator;

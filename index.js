/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const args = process.argv;

    //Error Handling
    if (args.length < 3) {
        return "No operation provided...";
    } else if (!(args.includes("plus") || args.includes("minus"))) {
        return `Invalid operation: ${args[2]}`;
    } else if (args.length < 4 || typeof Number(args[4]) !== "number") {
        return "No numbers provided...";
    }

    //plus operator
    if (args[2].toLowerCase() === "plus") {
        let sum = 0;
        for (let i = 3; i < args.length; i++) {
            sum += Number(args[i]);
        }
        return sum;

        //minus operator
    } else if (args[2].toLowerCase() === "minus") {
        let diff = Number(args[3]);
        for (let i = 4; i < args.length; i++) {
            diff -= Number(args[i]);
        }
        return diff;
    }
}




// Don't change anything below this line.
module.exports = calculator;

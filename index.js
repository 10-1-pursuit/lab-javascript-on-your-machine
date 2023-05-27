/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const args = process.argv.slice(2); // Get command line arguments excluding "node" and the script filename
    const operation = args[0];

    if (!operation) {
        return 'No operation provided...'
    }

    if (operation !== 'plus' && operation !== 'minus') {
        return `Invalid operation: ${operation}`
    }

    const numbers = args.slice(1).map(Number);

    if (numbers.length === 0) {
        return 'No numbers provided...'
    }

    let result = operation === 'plus' ? 0 : numbers[0]

    for (let i = operation === 'plus' ? 0 : 1; i < numbers.length; i++) {
        if (operation === 'plus') {
            result += numbers[i];
        } else {
            result -= numbers[i];
        }
    }

    return result;
}
// Don't change anything below this line.
module.exports = calculator;

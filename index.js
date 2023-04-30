/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
	// 1. Create a variable to hold the final result of the operation.
	let result = 0;
	//  2. `accumulator`
	let num = 0;
	// 3. another `accumulator` for the first element
	let firstNum = Number(process.argv[3]);

	// 4. Create a variable that accesses the inputted operation.
	const operation = process.argv[2];

	// 5. Error handling using guard clauses
	if (operation === undefined) {
		result = 'No operation provided...';
	}
	if (operation && process.argv[3] === undefined) {
		result = 'No numbers provided...';
	}
	if (
		operation &&
		process.argv[3] &&
		(operation !== 'plus' || operation !== 'minus')
	) {
		result = `Invalid operation: ${operation}`;
	}

	// 6. Iterate over the `process.argv` array.
	for (let i = 4; i < process.argv.length; i++) {
		// 7. If the operation passed in is `plus`, add the numbers together sequentially using the `accumulator pattern` and reassign the total to `result`.
		if (operation === 'plus') {
			// 8. Convert the inputted string to a `number` data type to be able to perform arithmetic operations on.
			num = Number(process.argv[i]);
			firstNum += num;
			result = firstNum;
		}
		// 9. If the operation passed in is `minus`, subtract the numbers sequentially using the `accumulator pattern` and reassign the result to `result`.
		if (operation === 'minus') {
			num = Number(process.argv[i]);
			firstNum -= num;
			result = firstNum;
		}
	}

	return result;
}

// Don't change anything below this line.
module.exports = calculator;

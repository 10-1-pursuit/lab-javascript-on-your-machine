/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
*/
function calculator() {
    let result = 0
    const command = process.argv[2]
    const numbers = process.argv
    if (numbers.length <= 2){
        return "No operation provided..."
    } else if (numbers.length <= 3){
        return "No numbers provided..."
    } else if (command === "plus"){
        for (let i = 3; i < numbers.length; i++){
            result += Number(numbers[i])
        }
    } else if (command === "minus"){
        if (numbers.length > 3){
            result = Number(numbers[3])
            for (let x = 4; x < numbers.length; x++){
                result -= Number(numbers[x])
            }
        }
    }  else if (command !== "plus" || "minus"){
        return `Invalid operation: ${command}`
    }
    return result
}
calculator()

// Don't change anything below this line.
module.exports = calculator;
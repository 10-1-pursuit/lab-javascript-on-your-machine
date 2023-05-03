/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    console.log(process.argv)
    let sum;
    let operations = process.argv[2];
    let emptyArr = []
    let indexOfInfo = process.argv

    if (indexOfInfo.length <= 2) {
        return `No operation provided...`
    }
    else if (indexOfInfo.length <= 3) {
        return `No numbers provided...`
    }

    else if (operations === "plus") {
        for (let i = 3; i < indexOfInfo.length; i++) {
            let num = indexOfInfo[i]
            emptyArr.push(num)
            sum = emptyArr.reduce((prev, curr) => Number(prev) + Number(curr))
        }
        return sum
    }
    else if (operations === "minus") {
        for (let i = 3; i < indexOfInfo.length; i++) {
            let num = indexOfInfo[i]
            emptyArr.push(num)
            sum = emptyArr.reduce((prev, curr) => Number(prev) - Number(curr))
        }
        return sum
    }
    else if (operations !== "plus" || "minus") {
        return `Invalid operation: ${operations}`
    }
}

calculator()


// Don't change anything below this line.

module.exports = calculator;

/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */








function calculator() {
     theOperator = process.argv[2];
    if (theOperator !== ("plus" || "minus")){
        return (`Invalid operation: ${theOperator}`)
    }
}

   // console.log (process.argv[2])
   if (firstStep !== "plus" || firstStep !== "minus"){
        return `Invalid operation: ${process.argv[2]}`
   }
    let firstStep = process.argv[2]
   if (firstStep === undefined){
        return "No operation provided..."
    }
    if (firstStep !== "plus" || firstStep !== "minus"){
     return `Invalid operation: ${process.argv[2]}`
}
    let numbers = process.argv.slice(3)
       if (numbers.length === 0){
            return "No numbers provided..."
       }
       if (typeof Number (numbers[0]) !== `number`){
            return "No numbers provided..."
        }
    
        console.log (process.argv[2]);

//console.log (calculator( parseInt(`${process.argv[3]}`) + parseInt(`${process.argv[4]}`)));
   // console.log(process.argv[2])

// Don't change anything below this line.
module.exports = calculator;


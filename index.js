/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
   //console.log(process.argv)
   //console.log(process.argv[2])
   //for(let num of process.argv)
    let operation = process.argv[2]
    let interger1 = process.argv[3]
    let interger2 = process.argv[4]

        result = 0;


   if(operation === "plus"){
    result += interger1 + interger2;
    return result; 
   }
   if(operation === "minus"){
     result += interger1 - interger2
    return result; 
    }
    if(operation != "plus" || operation != "minus"){
        return "No operation provided..."
    }
}
calculator()


// Don't change anything below this line.
module.exports = calculator;

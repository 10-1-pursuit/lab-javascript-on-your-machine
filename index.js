/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right. 🔐
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let operator = process.argv[2]; //let operator = "operationName"
  let sum = 0;
 

  if (!operator) {//is there an operator?
    return "No operation provided..."; //truthyness determined
  } else if (operator !== "plus" && operator !== "minus") { //no math allowed
    return "Invalid operation: " + operator;
  }

  const numbers = process.argv.slice(3); //look at every element after  [2]
  //let numArray = [];
   if (numbers.length === 0) { //are there less than 2 elements
      //console.log("first", numbers.length)
    return "No numbers provided...";
  }

  for( let num of numbers) { //iterate through [3] onwards
   if (operator === "plus") {
      sum += Number(num); //accumulate everything including && after [3]
      }
      else if (operator === "minus") {
        return sum = numbers.reduce((previousVal, currentVal) => Number(previousVal) - Number(currentVal)) //accummulate the difference of numbers
      }
      } 
  return sum;
}

calculator();

// Don't change anything below this line.
module.exports = calculator;

/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator( ) {
const thisACalc = (something,a,b,c) =>{
    const calculator = something(a,b,c);
    console.log(add);
};

if(something === "plus") {
const plus = (a,b,c) => {
    return a + b + c;
};

} else if (something === "minus") {
    const minus = (a,b,c) => {
        return a - b - c;
    };

}else if (something === "divide") {
        return "Invalid operation: diivide";
    };
    
}else if (something === " ") {
        return "No numbers provided";
    };
 if (something !== "something") {
        return " No operation provided";
    };


// Don't change anything below this line.
module.exports = calculator;

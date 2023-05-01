/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //console.log(process.argv)
   // console.log(process.argv[2])
    let calOperation = process.argv[2]
    let indexOf = process.argv
    let sum;
    let arr = [];
   // let calOp4 =  process.argv[4]
   // let calOp5 =  process.argv[5]
        if(indexOf.length <= 2 ){
        return "No operation provided..."  
    }
    else if (indexOf.length <= 3){
        return "No numbers provided..."
    }else if (calOperation === "plus"){
        for (let i = 3; i < indexOf.length; i++){
            let num = indexOf[i]
            arr.push(num)
            sum = arr.reduce((prev, curr)=> Number(prev) + Number (curr))
        }
        return sum;
    }
    else if(calOperation === 'minus'){
        for(let i = 3 ;i < indexOf.length; i++){
            let num = indexOf[i]
            arr.push(num)
            sum = arr.reduce((prev, curr)=> Number(prev) - Number (curr))
        }
         return sum;
        }
        else if (calOperation !== ("plus"||'minus')){
            return `Invalid operation: ${calOperation}`
        }
    }

    calculator()
// Don't change anything below this line.
module.exports = calculator;

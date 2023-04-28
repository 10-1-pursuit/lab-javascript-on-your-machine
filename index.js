/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator(plus,minus) {
//console.log(process)

     add2Num = parseInt(`${process.argv[3]}`) +parseInt(`${process.argv[4]}`);
         if(process.argv[2]=== plus){
            return add2Num
         }
        
 console.log(`Adding two numbers: ${add2Num}`)



    addMultipleNum = parseInt(`${process.argv[3]}`) + parseInt(`${process.argv[4]}`)+
 parseInt(`${process.argv[5]}`) + parseInt(`${process.argv[6]}`)+ parseInt(`${process.argv[7]}`);
         if(process.argv[2] === plus){
            return addMultipleNum
         }

console.log(`Adding multiple numbers:${addMultipleNum}`)

        

    sub2Num= parseInt(`${process.argv[4]}`)- parseInt(`${process.argv[3]}`);
        if(process.argv[2] === minus){
            return sub2Num
        }
console.log(`Subtracting two numbers : ${sub2Num}`)
        
        

    subMultipleNum=parseInt(`${process.argv[3]}`) -parseInt(`${process.argv[4]}`)-
parseInt(`${process.argv[5]}`) - parseInt(`${process.argv[6]}`)- parseInt(`${process.argv[7]}`);
        if(process.argv[2] === minus){
            return subMultipleNum
        }
console.log(`Subtracting multiplenumbers : ${subMultipleNum}`)

    div2Num= parseInt(`${process.argv[3]}`)/parseInt(`${process.argv[4]}`);
         if(process.argv[2] !== plus || process.argv[2] !== minus){
             console.log( `Invalid operation: ${process.argv[2]}` );
         }
        


}
calculator()





//
//console.log(process.argv[1]+process.argv[0]+process.argv[2]+process.argv[0]+process.argv[3]+process.argv[0]+process.argv[4])


// Don't change anything below this line.
module.exports = calculator;

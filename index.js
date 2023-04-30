/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
    //
    //console.log(process.argv)


     add2Num =  parseInt(`${process.argv[3]}`) + parseInt(`${process.argv[4]}`);
    
    if (process.argv[2] === "plus" && process.argv.length === parseInt(4)) {

        return add2Num;
    }

   console.log(`Adding two numbers:${add2Num}`)

             
    sub2Num= parseInt(`${process.argv[3]}`)- parseInt(`${process.argv[4]}`);
       
 if(process.argv[2] === "minus" && process.argv.length <= parseInt(4)){
      
            
                return sub2Num;
        }
console.log(`Subtracting two numbers : ${sub2Num}`)
        

       
       

        

         
    addMultipleNum = parseInt(`${process.argv[3]}`) + parseInt(`${process.argv[4]}`)+
 parseInt(`${process.argv[5]}`) + parseInt(`${process.argv[6]}`)+ parseInt(`${process.argv[7]}`);
       
 
 if(process.argv[2] === "plus" && process.argv.length === parseInt(7)){
                return addMultipleNum;
         }

console.log(`Adding multiple numbers: ${addMultipleNum}`)

       
      
       
   
        
     
        
        
    subMultipleNum = parseInt(`${process.argv[3]}`) - parseInt(`${process.argv[4]}`) -
parseInt(`${process.argv[5]}`) - parseInt(`${process.argv[6]}`) - parseInt(`${process.argv[7]}`);
      
        if(process.argv[2] === "minus" && process.argv.length === parseInt(7)){

                return subMultipleNum
        }
console.log(`Subtracting multiplenumbers : ${subMultipleNum}`)

  div2Num= parseInt(`${process.argv[3]}`) / parseInt(`${process.argv[4]}`);


   if (process.argv[2] === "modulo"||"divide" && process.argv.length===parseInt(0 )); {
   
      console.log((`Invalid operation: Nan, ${process.argv[2]}`));
   
   }
                   
}             
calculator()




                
             



//WAS WORKING BUT STOPPED WORKING 
// function add2Num(num1, num2) {
//    return num1 + num2;
//  }
 
//  function sub(num1, num2) {
//    return num1 - num2;
//  }
//  function addMultNum(num1, num2, num3,num4,num5) {
//    return num1 + num2+num3+num4+num5;
//  }
//  function subMultNum(num1, num2, num3,num4,num5) {
//    return num1 - num2 - num3 -num4 - num5;
//  }
//  function div() {
//    return `Invalid operation:` + process.argv[2];
//  }
//   function calculator(num1, num2, num3, num4, num5,opp){
   
//    if (opp === "plus"&& process.argv.length===parseInt(4) ){
//      return add2Num(num1, num2);
//    } else if (opp === "minus") {
//      return sub(num1, num2);
//    } else if (opp === "plus"&& process.argv.length<parseInt(8)) {
//      return addMultNum(num1, num2, num3, num4, num5);
//    } else if (opp === "minus"&&process.argv.length<parseInt(8)) {
//      return subMultNum(num1, num2,num3,num4,num5);
//    } else if(opp === "modulo"|| "divide"){
//      return div( );
//      }
//    }
 
//  console.log(calculator(parseInt(process.argv[3]),parseInt(process.argv[4]),parseInt(process.argv[5]),parseInt(process.argv[6]),parseInt(process.argv[7]),parseInt(process.argv[2])));





// //
// //console.log(process.argv[1]+process.argv[0]+process.argv[2]+process.argv[0]+process.argv[3]+process.argv[0]+process.argv[4])


// Don't change anything below this line.
module.exports = calculator;




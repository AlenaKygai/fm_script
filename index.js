/*
function myFirstFunction(){
  console.log('text in myFirstFunction');
}
myFirstFunction();


const mySecondFunction = function(){    // function expression
  console.log('text in mySecondFunction');
}

mySecondFunction();

console.log(mySecondFunction);

*/

// const getSumTwoNums = function(){
//   let userInput1 = prompt('enter fisrt number');
//   let userInput2 = prompt('enter second number');

//   let checkEmpty = userInput1==='' || userInput1===null || userInput1===''|| userInput1===null ;
//   let sum = Number(userInput1) + Number(userInput2);
//   if(checkEmpty || isNaN(sum)){
//     console.log('Error');
//   }else{
//     console.log(userInput1, '+' ,userInput2, '=' , sum);
//   }
// }

// getSumTwoNums();

/**
 * 
 * @param {string} value 
 * @returns {boolean}
 */
const isNotNumber = function(value){
  return value==='' || value===null || isNaN(Number(value));
}
/**
 * 
 * @param {any} num1 
 * @param {any} num2 
 * @returns {boolean | number}
 */
const getSumTwoNums = function(num1, num2){
    if(isNotNumber(num1)|| isNotNumber(num2)){
      return false;
    }
    return Number(num1) + Number(num2);
}
  let userInput1 = prompt('enter fisrt number');
  let userInput2 = prompt('enter second number');

  let result = getSumTwoNums(userInput1, userInput2);

  if(result===false){
    console.log('Error');
  }else{
    console.log(result);
  }
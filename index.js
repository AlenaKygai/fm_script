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

// /**
//  * 
//  * @param {string} value 
//  * @returns {boolean}
//  */
// const isNotNumber = function(value){
//   return value==='' || value===null || isNaN(Number(value));
// }
// /**
//  * 
//  * @param {any} num1 
//  * @param {any} num2 
//  * @returns {boolean | number}
//  */
// const getSumTwoNums = function(num1, num2){
//     if(isNotNumber(num1)|| isNotNumber(num2)){
//       return false;
//     }
//     return Number(num1) + Number(num2);
// }
//   let userInput1 = prompt('enter fisrt number');
//   let userInput2 = prompt('enter second number');

//   let result = getSumTwoNums(userInput1, userInput2);

//   if(result===false){
//     console.log('Error');
//   }else{
//     console.log(result);
//   }


  /*
  Написать функцию которая возвращает максимальное значение из двух(одного типа)
  если не возможно сравнить возвращает  null
  значение запрашиваем у пользователя
  */
// /**
//  * 
//  * @param {any} val1 
//  * @param {any} val2 
//  * @returns {any,null}
//  */
// const getMaxParametr = function(val1, val2){
//   if(typeof val1 === typeof val2){
//     if(val1>val2){
//       return val1;
//     }else{
//       return val2;
//     }
//   }
//   return null;
// }

// console.log(getMaxParametr(12,4));
// console.log(getMaxParametr(12,0));
// console.log(getMaxParametr(12,102));
// console.log(getMaxParametr(12,4));
// console.log(getMaxParametr('a',4));
// console.log(getMaxParametr('a', 'f'));
// console.log(getMaxParametr(true,false));


// написать функцию которая определяет четность числа

const isEven = function(val1){
 if( val1%2===0){
  return true;
} else {
  return false;
}
}
console.log(isEven(12));



const isEven1 = function(val){
  if( typeof val === 'number'){
   return val % 2 === 0;
 }
   return null;
 }
 console.log(isEven1(13));
 console.log(isEven1('sssa'));
 console.log(isEven1(16));
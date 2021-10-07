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

const getSumTwoNums = function(){
  let userInput1 = prompt('enter fisrt number');
  let userInput2 = prompt('enter second number');

  let checkEmpty = userInput1==='' || userInput1===null || userInput1===''|| userInput1===null ;
  let sum = Number(userInput1) + Number(userInput2);
  if(checkEmpty || isNaN(sum)){
    console.log('Error');
  }else{
    console.log(userInput1, '+' ,userInput2, '=' , sum);
  }
}

getSumTwoNums();
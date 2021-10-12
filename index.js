
const sum = function(a,b){
  return a+b;
}
const sub = function(a,b){
  return a-b;
}
const mult = function(a,b){
  return a*b;
}
const div = function(a,b){
  return a/b;
}
const rem = function(a,b){
  return a%b;
}

// const calculate = function(num1=10,num2=2, operator='+'){
//   if(isNaN(num1*num2)){
//     return false;
//   }
//   let f;
//   switch (operator) {
//     case '+':
//       f = sum; break;
      
//     case '-':
//       f = sub; break; 

//     case '*':
//       f = mult; break;  

//     case '/':
//       f = div; break;     

//     default:
//       return null;
//   }
//   return f(num1,num2);
// }

// console.log(calculate());

// const userNumber1 = prompt('Enter fisrt number');
// const userNumber2 = prompt('Enter second number');
// const userOperator = prompt('Enter operator');
// console.log(calculate(userNumber1,userNumber2,userOperator));



const hightOrderFunction = function(num1, num2, func){
  return func(num1,num2);
}

const res = hightOrderFunction(2,6,mult);
console.log(res);

const res1 = hightOrderFunction(2,6,rem);
console.log(res1);
'use strict';

const power = (num,exp) =>{
  if(exp === 1){
    return num;
  }
  return num * power (num,exp -1);
}
power(2,3);


const factorial = (num) =>{
  if(num === 0){
    return 1;
  }
  return num * factorial (num - 1);
}
factorial(4);

const maxNumbers = (a,b) => a>b ? a : b;
console.log(maxNumbers(10,4));


const showArg = (a,b, ...c) =>{
  console.log(c);
  c.forEach(() => {
    console.log(this);
  });
}
showArg(1,2,3,4,5,6); // 
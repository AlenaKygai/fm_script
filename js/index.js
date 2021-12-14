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
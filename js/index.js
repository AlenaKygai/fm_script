'use strict';

// sum, которая принимает неограничинное  кол-во параметров

const getSum = (...args) =>{
  let result = null;
  args.forEach((n) => {
     result += n ;
  });
  return result;
}
console.log('result: ' + getSum(1,2,3,4,5));


const sum2 = (...args) => args.reduce( (result,n) => result+n);

const arrNums1 = [4,1,3,6];
console.log(getSum(...arrNums1));
console.log(sum2(...arrNums1));

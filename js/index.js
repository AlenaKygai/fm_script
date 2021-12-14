'use strict';
const t1 = function(...rest){
  console.log(arguments)
  console.log(rest)
}

const t2 = (num, ...rest) => {
  // console.log(arguments)
  console.log('num = ', num)
  console.log('rest = ', rest)
}

console.dir(t1);
console.dir(t2);

t1(1,2,3,4);
t2(1,2,3,4);

// sum, которая принимает неограничинное  кол-во параметров

const getSum = (...args) =>{
  let result = null;
  args.forEach(element => {
     result += element ;
  });
  return result;
}
console.log('result: ' + getSum(1,2,3,4,5));

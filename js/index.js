'use strict';

// const MyArray1 = new MyArray(1,undefined,1,new MyArray(2,2),1,1);
// const MyArray2 = MyArray1.flat(1);
// console.log(MyArray2);

const mySumbol1 = Symbol('Property');

const object = {
  login:'qwerty',
  mySumbol1: 'asda',
  [mySumbol1]: 123,
}

const arr = [1,2,3,4,5];
for (const iterator of arr) {
  console.log(iterator);
}

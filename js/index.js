'use strict';

const MyArray1 = new MyArray(1,undefined,1,new MyArray(2,2),1,1);
const MyArray2 = MyArray1.flat(1);
console.log(MyArray2);
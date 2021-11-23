const t1 = 1;
const t2 = 1;

const obj1 = {};
const obj2 = {};

const link = obj1; //копирование по ссылке

console.log(obj1==link); // true
console.log(obj2==link); // false

link.prop2 = 44; 
'use strict';
const t1 = function(){
  console.log(arguments)
}

const t2 = () => {
  console.log(arguments)
}

console.dir(t1);
console.dir(t2);

t1(1,2,3,4);
t2(1,2,3,4);
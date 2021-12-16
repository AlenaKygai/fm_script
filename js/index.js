'use strict';

// const Test = class{};

function test(a,b, ...args){
  console.log();
  return class{
    constructor(a,b){}
  }
}
const Test1 = test(1,2,3);
'use strict';

const boolean = new Boolean (false); // одна из возможностей - явное приведение типа
console.log(boolean); // object

if(boolean){
  console.log('true')
}else{
  console.log('false')
}


const str = 'Elon';
if(Boolean(str)){
  console.log(Boolean(str))
}else{
  console.log('false')
}

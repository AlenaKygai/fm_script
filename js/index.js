'use strict';


// декларативное объявление функции 
function test1(){
  console.log(this);
}

//выражение  
// нельзя вызвать перед объявлением функции 
const test2 = function(){
  console.log(this);
}


//стрелка, берет this ищет из окружения, у нее нет своего контекста
const test3 = () => {
  console.log(this);
}

test1();
test2();
test3();
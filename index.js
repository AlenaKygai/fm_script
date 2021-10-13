// объявление и инициализация счетчика итеррации
// условие захода в каждый итеррацию
// for(let i=0; i<MAX_COUNT_TRY; i++){
//   console.log(i);
//   const password = prompt('Enter password');
//   if (password === RIGHT_PASSWORD){
//     alert('Thanks')
//     break;
//   }
//   if(i+1===MAX_COUNT_TRY){
//     alert('Try over');
//   }
// }

// найти факториал числа 


const calcFactorial = function(number=2){
  if(number<0){
    return null;
  }
  if(number===0 || number===1){
    return 1;
  }
  if(number>MAX_FACTORIAL){
    return false;
  }
  let result = 1n;
  for(let i=1; i<=number; i++){
    result *= BigInt(i);
  }
  return result;
}
console.log(calcFactorial(3));
console.log(calcFactorial(4));
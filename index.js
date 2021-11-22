// вывести числа от макс д (в прядке убывания) кратные num

// const showHRange = function(max,min,num){
//  let i=max;
//  while(i>=min){
//    if(i%num===0){
//    console.log(i);
//   }
//   i--;
//  }
// }
// showHRange(20,10,3);

// const showRangeRight = function(max,min,num){
//   for (let i = max; i>= min; i--) {
//     if(i%num === 0){
//       console.log(i);
//     }
//   }
// }
// showRangeRight(30,10,4);

// предлагать пользователю решить арифметический пример до тех пор, пока он его не решит
// function checkMath(num1, num2,operator){}
// checkMath(5,4,'*');
//prompt('5*4=')


const checkMath = function (num1, num2, operator){
  let result=0;
  switch (operator) {
    case'*':
    result=num1*num2;
    break;
      case '/':
      result=num1/num2;
      break;
        case '-':
        result=num1-num2;
        break;
          case '+':
          result=num1+num2;
          break;
    default:
      break;
  }
  let userResult = prompt(num1 + operator + num2 + '=');
  if (Number(userResult)===result){
    return alert('Good result');
  }else{
    return checkMath(num1, num2, operator);
  }
}
checkMath(5,4,'*');

const checkMathRight = function (num1, num2, operator){
  let result=null;
  switch (operator) {
    case'*':
      result=num1*num2;
      break;
    case '/':
      result=num1/num2;
      break;
    case '-':
      result=num1-num2;
      break;
    case '+':
      result=num1+num2;
      break;
    default:
      break;
  }
  if(result===null){
    return 'Error';
  }
  while(true){
    const userResult = prompt(num1 + operator + num2 + '=');
    if (Number(userResult)===result){
      return alert('Good result');
     }
    }
}
checkMathRight(5,5,'+');
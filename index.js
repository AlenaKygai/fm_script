// alert('I\'m a teacher');

let userInput = prompt('Enter number: ');

// пустая строка
// null
// то что нельзя привести к числу 

let isNotNumber = userInput==='' || userInput===null || isNaN(Number(userInput));

if(isNotNumber){
  console.log('Error');
}else{
  console.log('Well done');
}






